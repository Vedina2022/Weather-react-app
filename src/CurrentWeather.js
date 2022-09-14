import React, { useState } from "react";
import axios from "axios";
import "./CurrentWeather.css";
import "bootstrap/dist/css/bootstrap.css";
import WeatherInfo from "./WeatherInfo";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
    });
  }

  function search() {
    let apiKey = "acdafd58d2b7bf1eca6d5caa45fe2f0f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="search">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-8">
                <input
                  type="text"
                  placeholder="Search for location..."
                  className="form-control search-input"
                  autoFocus="on"
                  onChange={handleCityChange}
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
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
