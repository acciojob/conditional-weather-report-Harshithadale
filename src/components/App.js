import React, { useEffect, useState } from "react";
import "../styles/App.css";
import axios from "axios";

function App() {
  const [WeatherDisplay, setWeatherDisplay] = useState(true);
  const staticWeatherInp = { temperature: 25, conditions: "Sunny" };
  useEffect(() => {
    if (staticWeatherInp.temperature > 20) {
      setWeatherDisplay(false);
    }
  }, []);
  return (
    <div>
      {WeatherDisplay ? (
        <p>
          Temperature:{" "}
           <span style={{ color: "blue" }}>{staticWeatherInp.temperature}</span>
        </p>
      ) : (
        <p>
          Temperature:{" "}
           <span style={{ color: "red" }}> {staticWeatherInp.temperature}</span>
        </p>
      )}
      <p>Conditions: {staticWeatherInp.conditions}</p>
    </div>
  );
}

export default App;
