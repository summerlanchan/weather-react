import React from "react";

import "./App.css";
import WeatherApp from "./WeatherApp.js";
import GitLink from "./GitLink.js";

function App() {
  return (
    <div className="App">
      <h2>Weather App</h2>
      <WeatherApp />
      <GitLink />
    </div>
  );
}

export default App;
