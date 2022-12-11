import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from "./FormattedDate";
import Humidity from "./Humidity";
import Wind from "./Wind";
import WeatherIcon from "./WeatherIcon";
import "./css/Current.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";

export default function Current(props) {
  return (
    <div className="CurrentInfo">
      <div className="headings">
        <h1>{props.data.city}</h1>
        <h2 className="subheading">{props.data.description}</h2>
      </div>
      <div className="row recent">
        <div className="col-6">
          <div className="subhead">
            <FormattedDate date={props.data.date} />
          </div>
        </div>
        <div className="row">
          <div className="col figures">
            <div className="current">
              <WeatherIcon code={props.data.icon} />
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
          <div className="col current-info">
            <ul>
              <li>
                <FontAwesomeIcon icon={faDroplet}></FontAwesomeIcon>
                <i className="fa-solid fa-droplet"></i>
                Humidity:
                <Humidity humidity={props.data.humidity} />
              </li>
              <li>
                <FontAwesomeIcon icon={faWind}></FontAwesomeIcon>
                Wind: <Wind wind={props.data.wind} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
