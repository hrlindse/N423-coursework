import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function SplashScreen() {
  useEffect(() => {
    // Hide navigation bar, wait for navbar to render before hiding it.
    if (!document.getElementById("root").classList.contains("nonav")) {
      document.getElementById("root").classList.add("nonav");
    }
    return () => {
      document.getElementById("root").classList.remove("nonav");
    };
  });

  return (
    <div className="splashscreen">
      <div className="titles">
        <h1 className="title">Meal Planner</h1>
        <div className="subtitle">Let's get cooking!</div>
      </div>

      <div className="buttons">
        <Link className="button" to="/signup">
          <div id="signup">Sign up</div>
        </Link>
        <Link className="button" to="/login">
          <div id="login">Log In</div>
        </Link>
      </div>
    </div>
  );
}

export default SplashScreen;
