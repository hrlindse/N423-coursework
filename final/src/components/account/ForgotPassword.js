import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
//css from menus.scss

function ForgotPassword() {
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
    <div className="forgot menu">
      <ion-icon
        name="chevron-back-outline"
        onClick={() => history.goBack()}
      ></ion-icon>

      <div className="popout">
        <h1>Log in</h1>
        <form>
          <div className="fields">
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <input type="submit" value="Send password reset link" />
        </form>
      </div>
      <div className="below">
        <Link to="/signup">Don't have an account? Sign up</Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
