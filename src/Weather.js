import React, { useState } from "react";
import Current from "./Current";
import "./css/Container.css";
import axios from "axios";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "e479457657257579193e6c4c14f91ff2";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
  }
  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form
          className="search-engine"
          id="city-search"
          onSubmit={handleSubmit}
        >
          <input
            type="search"
            className="form-control Search"
            placeholder="Enter city"
            id="city-input"
            autocomplete="off"
            onChange={getCity}
          />
          <button type="submit" className="search-btn" id="search-button">
            Search
          </button>
        </form>

        <Current value={17} data={weatherData} />

        <a
          href="https://github.com/hollsmith2000/react-weather-application"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Open-source code
        </a>
        <span className="creator"> by Holly Smith</span>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
