import React from "react";
import Humidity from "./Humidity";
import Wind from "./Wind";
import "./Current.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
export default function Current(props) {
  return (
    <div className="row">
      <div className="col figures">
        <div className="current">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Clear"
            id="icon"
          />
          <span id="temperature">{props.value}</span>
          <span className="units">
            <a href="/" id="Celsius">
              ºC
            </a>
            |
            <a href="/" id="Fahrenheit">
              ºF
            </a>
          </span>
        </div>
      </div>
      <div className="col current-info">
        <ul>
          <li>
            <FontAwesomeIcon icon={faDroplet}></FontAwesomeIcon>
            <i className="fa-solid fa-droplet"></i>
            Humidity:
            <Humidity value={80} />
          </li>
          <li>
            <FontAwesomeIcon icon={faWind}></FontAwesomeIcon>
            Wind: <Wind value={7} />
          </li>
        </ul>
      </div>
    </div>
  );
}
