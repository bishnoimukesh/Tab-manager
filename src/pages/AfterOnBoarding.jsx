import {Search, Quote, Clock, Weather, Focus, Todo} from "../components/index";

const AfterOnBoarding = () => {
    return (
        <>
            <div className="header">
                <Search/>
                <Weather/>
            </div>
            <div className="center">
                <Clock/>
                <Focus />
            </div>
            <div className="footer">
                <Quote />
                <Todo/>
            </div>
        </>
    )
}

export {AfterOnBoarding};