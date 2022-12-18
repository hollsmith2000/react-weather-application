import React from "react";

import FormattedDate from "./FormattedDate";
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

              <span className="WeatherTemperature">
                <span id="temperature">
                  {Math.round(props.data.temperature)}
                </span>
                <span className="units">ºC</span>
              </span>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-8 current-info">
            <ul>
              <li>
                <FontAwesomeIcon icon={faDroplet}></FontAwesomeIcon>
                <i className="fa-solid fa-droplet"></i>
                Humidity:
                <span> {props.data.humidity}% </span>
              </li>
              <li>
                <FontAwesomeIcon icon={faWind}></FontAwesomeIcon>
                Wind: <span>{Math.round(props.data.wind * 2.237)} mph</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
