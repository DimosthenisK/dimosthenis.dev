import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactGA.initialize("UA-185250785-1", {
  debug: false,
  titleCase: false,
});

ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
