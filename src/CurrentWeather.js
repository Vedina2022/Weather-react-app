import React, { useState } from "react";
import axios from "axios";
import "./CurrentWeather.css";
import "bootstrap/dist/css/bootstrap.css";
import WeatherInfo from "./WeatherInfo";
import DailyWeather from "./DailyWeather";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [description, setDescription] = useState(props.description);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      coordinates: response.data.coord,
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
    setDescription(response.data.weather[0].main);
  }

  function search() {
    let apiKey = "acdafd58d2b7bf1eca6d5caa45fe2f0f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handlePexelResponse(response) {
    console.log(response.data.photos[0].src.landscape);
    setPhotos(response.data.photos[0].src.landscape);
  }

  let pexelApiKey = "563492ad6f91700001000001f7796f2bf9a84b628875590e1f09586c";
  let pexelApiUrl = `https://api.pexels.com/v1/search?query=${description}&per_page=1`;
  const headers = { Authorization: `Bearer ${pexelApiKey}` };
  axios.get(pexelApiUrl, { headers: headers }).then(handlePexelResponse);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather" style={{ backgroundImage: `url(${photos})` }}>
        <div className="container">
          <div className="search">
            <form className="search-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-10">
                  <input
                    type="search"
                    placeholder="Search for location..."
                    className="form-control search-input"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-2">
                  <button type="submit">Search</button>
                </div>
              </div>
            </form>
            <WeatherInfo data={weatherData} />
            <DailyWeather coordinates={weatherData.coordinates} />
          </div>
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
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
