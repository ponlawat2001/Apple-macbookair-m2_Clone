import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "../routers/router";
import Example, { Navbar } from "../nav/nav";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <Example />
        <Router />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
