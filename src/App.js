import React from "react";
import "./App.css";
import WeatherApp from "./WeatherApp.js";
import WeatherForecast from "./WeatherForecast.js";
function App() {
  return (
    <div className="App">
      <h2>Weather App</h2>
      <WeatherApp />
      <WeatherForecast />
    </div>
  );
}

export default App;
