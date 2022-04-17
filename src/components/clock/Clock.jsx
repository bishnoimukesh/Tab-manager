import { useEffect, useState} from 'react';
import "./Clock.css";

const Clock = () => {
    const [userName, setUserName] = useState("");
    const [time, setTime] = useState(new Date());
    const [is24Hour] = useState(true);

    useEffect(() => {
        const name = localStorage.getItem("name");
        setUserName(name);
    }, []);

    const hour = time.getHours();
    const minute = time.getMinutes();
    const minutes = minute / 10 < 1 ? `0${minute}` : minute;
    const greet = `Good ${
        (hour > 4 && hour < 12 && "Morning") || 
        (hour < 17 && "Afternoon") || 
        (hour < 22 && "Evening") || 
        "Night"}, ${userName}`;

    useEffect(() => {
        setInterval(() => {
            setTime(()=> new Date());
        },1000);
    },[]);

    return (
        <>
            <div className="time-container">
                <p className="time-display">
                    {is24Hour ? `${hour}:${minutes}` : `${hour > 12 ? hour - 12 : hour}:${minutes} ${hour > 12 ? "PM" : "AM"}`}
                </p>
                <p className="greet-msg">
                    {greet}
                </p>
            </div>
        </>
    )
}

export {Clock};