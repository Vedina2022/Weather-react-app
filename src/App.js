import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import CurrentWeather from "./CurrentWeather";

function App() {
  return (
    <div className="App">
      <CurrentWeather defaultCity="Mykolaiv" description="Clear Sky" />
    </div>
  );
}

export default App;
