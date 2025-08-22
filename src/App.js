import {useState, useEffect} from "react"
import {OnBoarding, AfterOnBoarding} from "./pages";
import './App.css';

function App() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const name = localStorage.getItem("name");
    setUsername(name);
    
    // Preload background image for faster rendering across the app
    const img = new Image();
    img.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80';
  },[]);

  return (
    <div className="App">
      {username === null ? <OnBoarding /> : <AfterOnBoarding />}
    </div>
  );
}

export default App;
