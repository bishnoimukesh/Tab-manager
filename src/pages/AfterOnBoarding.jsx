import {Search, Quote, Clock, Weather} from "../components/index";
const AfterOnBoarding = () => {
    return (
        <>
            <div className="header">
                <Search/>
                <Weather/>
            </div>
            <div className="center">
                <Clock/>
            </div>
            <div className="footer">
                <Quote />
            </div>
        </>
    )
}

export {AfterOnBoarding};