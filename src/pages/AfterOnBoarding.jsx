import {Quote, Clock, Weather, Todo, GoogleSearch} from "../components/index";

const AfterOnBoarding = () => {
    return (
        <>
            <div className="header">
                <Weather/>
            </div>
            <div className="center">
                <Clock/>
                <GoogleSearch />
            </div>
            <div className="footer">
                <Quote />
                <Todo/>
            </div>
        </>
    )
}

export {AfterOnBoarding};