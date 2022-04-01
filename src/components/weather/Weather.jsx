import React, { useState, useEffect } from 'react'
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
    const onSuccess = location => {
        console.log("succ");
        setLocation({
            load: true,
            coordinates: {
                lat: location.coords.latitude,
                log: location.coords.longitude
            },
        })
    }
    const onError = error => {
        console.log("err");
        setLocation({
            load: true,
            error,
        })
    }
    console.log(location.error);
    useEffect(() => {
        console.log("asd");
        if (!("geolocation" in navigator)) {
            console.log("here");
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
        (async () => {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coordinates.lat}&lon=${location.coordinates.log}&appid=542f18acb500a0930e49a23a06919a1d`)
            console.log(data)
            setWeatherData(data)
        })()
    }, [location.coordinates.lat, location.coordinates.log])
    return (
        <div className="weather-section">
            {weatherData &&
                <>
                    <img className="weather-icon" src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].main} />
                    <div className="weather-value">
                        <div>{parseInt(weatherData.main.temp - 273.15)} °C</div>
                        <div>{weatherData.name}</div>
                    </div>
                </>
            }
        </div>
    )
}

export { Weather }