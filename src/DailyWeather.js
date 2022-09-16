import React, { useState } from "react";
import "./DailyWeather.css";
import "bootstrap/dist/css/bootstrap.css";

import axios from "axios";
import DailyForecast from "./DailyFocast";

export default function DailyWeather(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="row">
        <div className="col daily-forecast">
          <DailyForecast data={forecast[0]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "acdafd58d2b7bf1eca6d5caa45fe2f0f";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
