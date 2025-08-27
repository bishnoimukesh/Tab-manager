import {Quote, Clock, Weather, Todo} from "../components/index";

const AfterOnBoarding = () => {
    return (
        <>
            <div className="header">
                <Weather/>
            </div>
            <div className="center">
                <Clock/>
            </div>
            <div className="footer">
                <Quote />
                <Todo/>
            </div>
        </>
    )
}

export {AfterOnBoarding};