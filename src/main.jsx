import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router/WebRouter";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Login-demo/">
      <Router />
    </BrowserRouter>
  </React.StrictMode>
)