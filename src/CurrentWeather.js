import "./CurrentWeather.css";

export default function CurrentWeather() {
  let weathetData = {
    city: "Mykolaiv",
    date: "Friday, August 19, 2022, 15:54",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 74,
    wind: 3,
    temperature: 19,
    feelsLike: 19,
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
          <img
            src={weathetData.imgUrl}
            alt={weathetData.description}
            className="float-left today-icon"
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
