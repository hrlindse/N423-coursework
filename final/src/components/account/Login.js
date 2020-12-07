import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
//css from menus.scss

function Login() {
  let history = useHistory();
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
    <div className="login menu">
      <ion-icon
        name="chevron-back-outline"
        onClick={() => history.goBack()}
      ></ion-icon>

      <div className="popout">
        <h1>Log in</h1>
        <form>
          <div className="fields">
            <input type="email" id="email" name="email" placeholder="Email" />
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <input type="submit" value="Log in" />
        </form>
      </div>
      <div className="below">
        <Link to="/signup">Don't have an account? Sign up</Link>
        <Link to="/forgot">Forgot password?</Link>
      </div>
    </div>
  );
}

export default Login;
