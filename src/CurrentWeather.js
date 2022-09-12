import React, { useState } from "react";
import axios from "axios";
import "./CurrentWeather.css";
import "bootstrap/dist/css/bootstrap.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function CurrentWeather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Wednesday, September 7, 2022, 14:59",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      wind: response.data.wind.speed,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="search">
          <form className="search-form">
            <div className="row">
              <div className="col-8">
                <input
                  type="text"
                  placeholder="Search for location..."
                  className="form-control search-input"
                  autoFocus="on"
                />
              </div>
              <div className="col-2">
                <button type="submit">Search</button>
              </div>
              <div className="col-2">
                <button className="btn btn-succes">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="row">
          <div className="col-6">
            <ul>
              <li className="city">{weatherData.city}</li>
              <li className="current-time">{weatherData.date}</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <img src={weatherData.iconUrl} alt={weatherData.description} />{" "}
          </div>
          <div className="col-6">
            <div className="current-weather">
              <ul>
                <li>
                  <span className="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="units">
                    <a href="/" className="active">
                      °C |
                    </a>
                    <a href="/" className="fahrenheit">
                      °F
                    </a>
                  </span>
                </li>
                <li>
                  Feels like: <span>{Math.round(weatherData.feelsLike)}</span>°C
                </li>
                <li>
                  Humidity:
                  <span> {weatherData.humidity}</span>%
                </li>
                <li>
                  Wind:
                  <span> {Math.round(weatherData.wind)}</span> km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "acdafd58d2b7bf1eca6d5caa45fe2f0f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
