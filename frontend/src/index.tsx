import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NavBar from "./Components/NavBar";
import "./Styles/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <div className="page-wrapper">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
