import "./CurrentWeather.css";
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
    <div>
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
