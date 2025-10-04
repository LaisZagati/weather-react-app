import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    // filter only the daily forecasts at 12:00
    let dailyForecast = response.data.list.filter((forecastItem) =>
      forecastItem.dt_txt.includes("12:00:00")
    );
    setForecast(dailyForecast);
    setLoaded(true);
  }

  useEffect(() => {
    if (!props.coordinates) return;

    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }, [props.coordinates]);

  if (loaded && forecast && forecast.length > 0) {
    console.log(forecast);

    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.slice(0, 6).map((dailyForecast, index) => (
            <div className="col" key={index}>
              <WeatherForecastDay data={dailyForecast} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
