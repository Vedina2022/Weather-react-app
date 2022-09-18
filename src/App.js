import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import CurrentWeather from "./CurrentWeather";

function App() {
  return (
    <div className="container">
      <CurrentWeather defaultCity="Mykolaiv" />
      <div className="footer">
        <p className="developer" id="developer">
          <a
            href="https://github.com/Vedina2022/Weather-react-app"
            target="_blank"
            rel="noopener noreferrer"
            className="developer-link"
          >
            Open-source code
          </a>
          <span> by Nadiia Kyshinska</span>
        </p>
      </div>
    </div>
  );
}

export default App;
