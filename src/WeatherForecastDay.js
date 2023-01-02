import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./css/WeatherForecastDay.css";
export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  return (
    <div>
      <div className="WeatherForecast-day days">{day()}</div>

      <WeatherIcon code={props.data.weather[0].icon} size={36} />

      <div className="Forecast-temperatures temps">
        <span className="Forecast-temperature-max">{maxTemperature()}º|</span>
        <span className="Forecast-temperature-min">{minTemperature()}º</span>
      </div>
    </div>
  );
}
