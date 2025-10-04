import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 class="page-title">Weather Forecast</h1>
        <Weather defaultCity="Miami" />
        <footer>
          {" "}
          This project was coded by Lais Zagati and is
          <a
            href="https://github.com/LaisZagati/weather-react-app"
            target="blank"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
