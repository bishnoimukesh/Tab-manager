import './OnBoarding.css';

const OnBoarding = (e) => {
    const nameHandler = e =>{
    if(e.key === 'Enter') {
        localStorage.setItem('name', e.target.value);
        window.location.reload(false);
    }}
    
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