import {useState, useEffect} from "react"
import {OnBoarding, AfterOnBoarding} from "./pages";
import './App.css';

function App() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const name = localStorage.getItem("name");
    setUsername(name);
  },[]);

  return (
    <div className="App">
      {username === null ? <OnBoarding /> : <AfterOnBoarding />}
    </div>
  );
}

export default App;
