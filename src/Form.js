import React from "react";
import "./Form.css";
export default function Form() {
  return (
    <form className="search-engine" id="city-search">
      <input
        type="search"
        class="form-control Search"
        placeholder="Enter city"
        id="city-input"
        autocomplete="off"
      />
      <button type="submit" class="search-btn" id="search-button">
        Search
      </button>
      <button type="subtmit" class="info-btn" id="current-location-button">
        Current
      </button>
    </form>
  );
}
