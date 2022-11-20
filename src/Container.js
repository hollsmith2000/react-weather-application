import React from "react";
import Form from "./Form";
import Current from "./Current";
import "./Container.css";
export default function Container() {
  return (
    <div className="card-body">
      <Form />
      <h1>Manchester</h1>
      <h2>Partly Cloudy</h2>
      <div className="row recent">
        <div className="col-6">
          <div className="subhead">Sunday 11:50</div>
        </div>
        <Current value={17} />
      </div>
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
}
