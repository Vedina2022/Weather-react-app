import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import CurrentWeather from "./CurrentWeather";
import DailyWeather from "./DailyWeather";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <CurrentWeather />
      <DailyWeather />
      <Footer />
    </div>
  );
}

export default App;
