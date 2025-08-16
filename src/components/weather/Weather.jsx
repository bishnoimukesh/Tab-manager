import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom';
import axios from "axios"
import "./Weather.css"

const Weather = () => {
    const [location, setLocation] = useState({
        load: false,
        coordinates: {
            lat: "",
            log: ""
        },
    });
    const [weatherData, setWeatherData] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const [paperPos, setPaperPos] = useState({ top: 0, right: 0, width: 0 });
    const iconRef = useRef(null);
    const onSuccess = location => {
        setLocation({
            load: true,
            coordinates: {
                lat: location.coords.latitude,
                log: location.coords.longitude
            },
        })
    }
    const onError = error => {
        setLocation({
            load: true,
            error,
        })
    }
    useEffect(() => {
        if (!("geolocation" in navigator)) {
            setLocation((state) => ({
                ...state,
                load: true,
                error: {
                    code: 0,
                    message: "Geolocation not supported",
                },
            }))
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }, [])
    useEffect(() => {
        if (!location.coordinates.lat || !location.coordinates.log) return;
        setLoading(true);
        setError(null);
        (async () => {
            try {
                // Open-Meteo: Current weather + extra details
                const currentRes = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${location.coordinates.lat}&longitude=${location.coordinates.log}&current_weather=true&hourly=relative_humidity_2m,pressure_msl,apparent_temperature,weathercode&daily=sunrise,sunset&timezone=auto`);
                setWeatherData({
                  ...currentRes.data.current_weather,
                  humidity: currentRes.data.hourly?.relative_humidity_2m?.[0],
                  pressure: currentRes.data.hourly?.pressure_msl?.[0],
                  apparent: currentRes.data.hourly?.apparent_temperature?.[0],
                  sunrise: currentRes.data.daily?.sunrise?.[0],
                  sunset: currentRes.data.daily?.sunset?.[0],
                });
                // Open-Meteo: 7-day forecast
                const forecastRes = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${location.coordinates.lat}&longitude=${location.coordinates.log}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`);
                const days = forecastRes.data.daily.time.map((date, idx) => ({
                    date,
                    max: forecastRes.data.daily.temperature_2m_max[idx],
                    min: forecastRes.data.daily.temperature_2m_min[idx],
                    code: forecastRes.data.daily.weathercode[idx],
                }));
                setForecast(days);
            } catch (err) {
                setWeatherData(null);
                setForecast([]);
                setError('Could not fetch weather data.');
            } finally {
                setLoading(false);
            }
        })()
    }, [location.coordinates.lat, location.coordinates.log])
    // Weather code mapping for Open-Meteo
    const weatherCodeMap = {
      0: { icon: '☀️', desc: 'Clear sky' },
      1: { icon: '🌤️', desc: 'Mainly clear' },
      2: { icon: '⛅', desc: 'Partly cloudy' },
      3: { icon: '☁️', desc: 'Overcast' },
      45: { icon: '🌫️', desc: 'Fog' },
      48: { icon: '🌫️', desc: 'Depositing rime fog' },
      51: { icon: '🌦️', desc: 'Drizzle: Light' },
      53: { icon: '🌦️', desc: 'Drizzle: Moderate' },
      55: { icon: '🌦️', desc: 'Drizzle: Dense' },
      56: { icon: '🌧️', desc: 'Freezing Drizzle: Light' },
      57: { icon: '🌧️', desc: 'Freezing Drizzle: Dense' },
      61: { icon: '🌧️', desc: 'Rain: Slight' },
      63: { icon: '🌧️', desc: 'Rain: Moderate' },
      65: { icon: '🌧️', desc: 'Rain: Heavy' },
      66: { icon: '🌧️', desc: 'Freezing Rain: Light' },
      67: { icon: '🌧️', desc: 'Freezing Rain: Heavy' },
      71: { icon: '🌨️', desc: 'Snow fall: Slight' },
      73: { icon: '🌨️', desc: 'Snow fall: Moderate' },
      75: { icon: '🌨️', desc: 'Snow fall: Heavy' },
      77: { icon: '🌨️', desc: 'Snow grains' },
      80: { icon: '🌦️', desc: 'Rain showers: Slight' },
      81: { icon: '🌦️', desc: 'Rain showers: Moderate' },
      82: { icon: '🌦️', desc: 'Rain showers: Violent' },
      85: { icon: '🌨️', desc: 'Snow showers: Slight' },
      86: { icon: '🌨️', desc: 'Snow showers: Heavy' },
      95: { icon: '⛈️', desc: 'Thunderstorm: Slight/Moderate' },
      96: { icon: '⛈️', desc: 'Thunderstorm: Hail' },
      99: { icon: '⛈️', desc: 'Thunderstorm: Heavy hail' },
    };

    return (
        <div
            className="weather-section weather-hover-root"
            onMouseEnter={e => {
                if (iconRef.current) {
                    const rect = iconRef.current.getBoundingClientRect();
                    setPaperPos({
                        top: rect.bottom + window.scrollY + 8,
                        left: rect.left + window.scrollX + rect.width / 2,
                        width: rect.width
                    });
                }
                setShowDetails(true);
            }}
            onMouseLeave={() => setShowDetails(false)}
        >
            {loading && <div className="weather-loading">Loading weather...</div>}
            {error && <div className="weather-error">{error}</div>}
            {weatherData && !loading && !error && (
                <>
                    <div className="weather-main-row">
                        <div className="weather-icon" ref={iconRef}>{weatherCodeMap[weatherData.weathercode]?.icon || '❓'}</div>
                        <div className="weather-value">
                            <div>{weatherData.temperature} °C</div>
                            <div>{weatherData.windspeed} km/h wind</div>
                        </div>
                    </div>
                    {showDetails && createPortal(
                        <div
                            className="weather-paper enhanced"
                            style={{
                                position: 'absolute',
                                top: paperPos.top,
                                left: paperPos.left,
                                transform: 'translateX(-50%)',
                                minWidth: 320,
                                maxWidth: '90vw',
                                zIndex: 9999
                            }}
                        >
                            <div className="weather-modal-header">
                                <span className="weather-modal-header-icon">{weatherCodeMap[weatherData.weathercode]?.icon || '🌦️'}</span>
                                <span className="weather-modal-header-title">Weather Details</span>
                            </div>
                            <div className="weather-details-block enhanced">
                                <div className="weather-detail-row"><span role="img" aria-label="Feels like">🌡️</span> <b>Feels like:</b> <span>{weatherData.apparent ?? '-'}</span> <span>°C</span></div>
                                <div className="weather-detail-row"><span role="img" aria-label="Humidity">💧</span> <b>Humidity:</b> <span>{weatherData.humidity ?? '-'}</span> <span>%</span></div>
                                <div className="weather-detail-row"><span role="img" aria-label="Pressure">🔽</span> <b>Pressure:</b> <span>{weatherData.pressure ?? '-'}</span> <span>hPa</span></div>
                                <div className="weather-detail-row"><span role="img" aria-label="Sunrise">🌅</span> <b>Sunrise:</b> <span>{weatherData.sunrise ? new Date(weatherData.sunrise).toLocaleTimeString() : '-'}</span></div>
                                <div className="weather-detail-row"><span role="img" aria-label="Sunset">🌇</span> <b>Sunset:</b> <span>{weatherData.sunset ? new Date(weatherData.sunset).toLocaleTimeString() : '-'}</span></div>
                            </div>
                            <div className="forecast-title enhanced">7-Day Forecast</div>
                            <div className="forecast-list enhanced">
                                {forecast.map((f, idx) => (
                                    <div className="forecast-item enhanced" key={idx}>
                                        <span className="forecast-day">{f.date.slice(5)}</span>
                                        <span className="forecast-temp">{f.max}°/<span className="forecast-min">{f.min}°C</span></span>
                                        <span className="forecast-desc">{weatherCodeMap[f.code]?.icon} <span className="forecast-desc-text">{weatherCodeMap[f.code]?.desc}</span></span>
                                    </div>
                                ))}
                            </div>
                        </div>,
                        document.body
                    )}
                </>
            )}
        </div>
    )
}

export { Weather }
