import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthProvider from "./providers/AuthProvider";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
