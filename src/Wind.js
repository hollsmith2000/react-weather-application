import React from "react";

export default function Wind(props) {
  return <span id="wind">{Math.round(props.wind * 2.237)} mph</span>;
}
