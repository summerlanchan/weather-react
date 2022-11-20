import React, { useState } from "react";
import axios from "axios";

export default function WeatherApp(event) {
  const [city, setCity] = useState(" ");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState("null");

  function displayWeather(response) {
    setLoaded = true;
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: "http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}";
    apiKey = "3499ef150985eccadd080ff408a018df";
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your city..."
          onChange={updateCity}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );

  if (loaded === true) {
    return (
      <div>
        {form}
        <ul>
          <li>
            Temperature:{Math.round(response.data.main.temp)} C Humidity:{" "}
            {weather.humidity}% Description:{weather.description}
            Wind: {weather.wind} km/h
            <img src={weather.icon} alt="icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
