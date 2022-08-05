import React from "react";
import ReactDOM from "react-dom/client";

// Components
import App from "./App";
import HeaderD from "./components/HeaderD";

// Styles
import "./styles/main_app_styles/main-app-styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HeaderD />
    <App />
  </React.StrictMode>
);
