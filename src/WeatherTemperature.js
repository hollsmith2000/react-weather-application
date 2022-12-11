import React, { useState } from "react";
import "./css/WeatherTemperature.css";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span id="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          ºC |
          <a href="/" id="Fahrenheit" onClick={showFahrenheit}>
            ºF
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span id="temperature">{Math.round(fahrenheit())}</span>
        <span className="units">
          <a href="/" id="Celsius" onClick={showCelsius}>
            ºC
          </a>
          | ºF
        </span>
      </span>
    );
  }
}
