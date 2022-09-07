import "./App.css";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import DailyWeather from "./DailyWeather";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <Search />
      <CurrentWeather />
      <DailyWeather />
      <Footer />
    </div>
  );
}

export default App;
