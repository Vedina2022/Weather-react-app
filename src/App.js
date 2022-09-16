import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import CurrentWeather from "./CurrentWeather";

import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <CurrentWeather defaultCity="Mykolaiv" />
      <Footer />
    </div>
  );
}

export default App;
