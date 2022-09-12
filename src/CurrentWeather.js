import React from "react";
import "./CurrentWeather.css";
import "bootstrap/dist/css/bootstrap.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function CurrentWeather() {
  let weathetData = {
    city: "Mykolaiv",
    date: "Wednesday, September 7, 2022, 14:59",
    description: "Broken clouds",
    humidity: 76,
    wind: 2,
    temperature: 11,
    feelsLike: 10,
  };
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
                autoComplete="off"
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
            <li className="city">{weathetData.city}</li>
            <li className="current-time">{weathetData.date}</li>
            <li>{weathetData.description}</li>
          </ul>
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="black"
            size="70"
            animate={true}
          />
        </div>
        <div className="col-6">
          <div className="current-weather">
            <ul>
              <li>
                <span className="temperature">{weathetData.temperature}</span>
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
                Feels like: <span>{weathetData.feelsLike}</span>°C
              </li>
              <li>
                Humidity:
                <span> {weathetData.humidity}</span>%
              </li>
              <li>
                Wind:
                <span> {weathetData.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
