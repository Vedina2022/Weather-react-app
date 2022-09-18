import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <ul>
            <li className="city">{props.data.city}</li>
            <li className="current-time">
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <WeatherIcon code={props.data.icon} size={65} />{" "}
        </div>
        <div className="col-6">
          <div className="current-weather">
            <ul>
              <li className="temperature">
                {Math.round(props.data.temperature)}
                <span className="units">°C</span>
              </li>
              <li>
                Feels like: <span>{Math.round(props.data.feelsLike)}</span>°
              </li>
              <li>
                Humidity:
                <span> {props.data.humidity}</span>%
              </li>
              <li>
                Wind:
                <span> {Math.round(props.data.wind)}</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
