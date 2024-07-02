import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./index.css";
import Characters from "./components/Characters";

function App() {

// link to character page

  return (
    <>
      <Router>
        <div>
          <h1>Star Wars Universe Lookup</h1>
          <Routes>
            <Route
              exact
              path="/"
              Component={Characters}
            />
          </Routes>
        </div>
      </Router>
    </>
  );    
}
export default App;



