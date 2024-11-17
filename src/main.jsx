import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router/WebRouter";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router basename="/Login-demo/" />
  </React.StrictMode>
)