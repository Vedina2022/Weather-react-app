import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    return days[day];
  }

  return (
    <div>
      <div className="weather-forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={40} />
      <div className="weather-forecast-temperatures">
        <div className="max-temperature">{maxTemperature()}</div>
        <div className="min-temperature">{minTemperature()}</div>
      </div>
    </div>
  );
}
