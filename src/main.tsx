import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AppContextProvider from "./contexts/AppContext";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContextProvider>
      <Router>
        <App />
      </Router>
    </AppContextProvider>
  </React.StrictMode>
);
