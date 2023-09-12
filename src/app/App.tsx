import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "../routers/router";
import Example from "../nav/nav";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Example />
        <Router />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
