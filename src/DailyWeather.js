import "./DailyWeather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function DailyWeather() {
  return (
    <div className="row">
      <div className="col daily-forecast">
        <div className="weather-forecast-day">WED</div>
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_DAY"
          color="black"
          size="40"
          animate={true}
        />
        <div className="weather-forecast-temperatures">
          <div className="max-temperature">22°</div>
          <div className="min-temperature">6°</div>
        </div>
      </div>
      <div className="col daily-forecast">
        <div className="weather-forecast-day">THU</div>
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_DAY"
          color="black"
          size="40"
          animate={true}
        />
        <div className="weather-forecast-temperatures">
          <div className="max-temperature">25°</div>
          <div className="min-temperature">10°</div>
        </div>
      </div>
      <div className="col daily-forecast">
        <div className="weather-forecast-day">FRI</div>
        <ReactAnimatedWeather
          icon="RAIN"
          color="black"
          size="40"
          animate={true}
        />
        <div className="weather-forecast-temperatures">
          <div className="max-temperature">15°</div>
          <div className="min-temperature">12°</div>
        </div>
      </div>
      <div className="col daily-forecast">
        <div className="weather-forecast-day">SAT</div>
        <ReactAnimatedWeather
          icon="RAIN"
          color="black"
          size="40"
          animate={true}
        />
        <div className="weather-forecast-temperatures">
          <div className="max-temperature">17°</div>
          <div className="min-temperature">13°</div>
        </div>
      </div>
      <div className="col daily-forecast">
        <div className="weather-forecast-day">SUN</div>
        <ReactAnimatedWeather
          icon="RAIN"
          color="black"
          size="40"
          animate={true}
        />
        <div className="weather-forecast-temperatures">
          <div className="max-temperature">15°</div>
          <div className="min-temperature">12°</div>
        </div>
      </div>
      <div className="col daily-forecast">
        <div className="weather-forecast-day">MON</div>
        <ReactAnimatedWeather
          icon="RAIN"
          color="black"
          size="40"
          animate={true}
        />
        <div className="weather-forecast-temperatures">
          <div className="max-temperature">11°</div>
          <div className="min-temperature">9°</div>
        </div>
      </div>
    </div>
  );
}
