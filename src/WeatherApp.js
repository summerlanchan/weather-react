import React from "react";

export default function WeatherApp() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("hi");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type your city..." />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
