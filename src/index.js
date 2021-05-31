import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const handleWindowScrolling = () => {
  const header = document.getElementById("header");
  const headerClasses = header.classList;
  if (window.scrollY === 0) {
    headerClasses.remove("bg-white", "shadow-lg");
    headerClasses.add("bg-section-hero");
  } else {
    headerClasses.remove("bg-section-hero");
    headerClasses.add("shadow-lg", "bg-white");
  }
};
window.addEventListener("scroll", handleWindowScrolling);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
