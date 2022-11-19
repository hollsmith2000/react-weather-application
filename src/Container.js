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
    </div>
  );
}
