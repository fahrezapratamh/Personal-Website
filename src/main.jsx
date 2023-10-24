/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./app.css";
import SectionContextProvider from "./context/Section.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SectionContextProvider>
      <App />
    </SectionContextProvider>
  </React.StrictMode>,
)