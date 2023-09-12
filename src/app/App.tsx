import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "../routers/router";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
