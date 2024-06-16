import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import GeneralInfo from "./components/GeneralInfo.jsx";
import "./index.css";
import EducationalExperience from "./components/Education.jsx";
import PracticalExperience from "./components/PracticalExperince.jsx";
import Preview from "./components/Preview.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
