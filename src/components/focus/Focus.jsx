import {useState, useEffect} from "react";
import "./Focus.css";

const Focus = () => {
    const [focus, setFocus] = useState("");
    const [isFocusCompleted, setIsFocusCompleted] = useState(false);
    const [focusInput, setFocusInput] = useState("");

    useEffect(() => {
        if (localStorage.getItem("focus")) 
        setFocus(localStorage.getItem("focus"));
        if (localStorage.getItem("focusCompleted"))
        setIsFocusCompleted(JSON.parse(localStorage.getItem("focusCompleted")));
    }, []);

    const handleCheckboxChange = (e) => {
        setIsFocusCompleted(e.target.checked);
        localStorage.setItem("focusCompleted", e.target.checked);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
        setFocus(focusInput);
        localStorage.setItem("focus", focusInput);
        setFocusInput("");
    }
    };

    const handleDelete = () => {
        localStorage.removeItem("focus");
        localStorage.removeItem("focusCompleted");
        setFocus("");
        setIsFocusCompleted(false);
    };

    return (
        <div className="focus-section">
        {focus ? (
        <div>
            <p className="focus-heading">Today's Target</p>
            <div className="set-focus">
                <input className="focus-checkbox"
                    type="checkbox"
                    checked={isFocusCompleted}
                    onChange={handleCheckboxChange}/>
                <p className={`${isFocusCompleted ? "line-through" : "focus-set"}`}>
                    {focus}
                </p>
                <button className="remove-btn" onClick={handleDelete}>
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
        ) : (
        <div className="initial-focus">
            <p className="focus-heading">What's your target for today?</p>
            <input className="focus-input" type="text"
                onChange={(e) => setFocusInput(e.target.value)}
                onKeyDown={handleKeyDown} value={focusInput}/>
        </div>
        )}
    </div>
    );
};

export {Focus};
