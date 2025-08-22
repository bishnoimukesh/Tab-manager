import { useEffect } from 'react';
import './OnBoarding.css';

const OnBoarding = (e) => {
    const nameHandler = e =>{
    if(e.key === 'Enter') {
        localStorage.setItem('name', e.target.value);
        window.location.reload(false);
    }}
    
    // Preload background image for faster rendering
    useEffect(() => {
        const img = new Image();
        img.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80';
    }, []);
    
    return (
        <div className="onboard-page">
            <h1 className="onboard-msg">Hey || What should I call you ?</h1>
            <h1>
                <input type="text" className="input" placeholder="Enter your name" onKeyPress={nameHandler}/>
            </h1>
        </div>
    )
}

export {OnBoarding};