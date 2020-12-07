import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";
import firebase from "firebase";

function RecipeAdd() {
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
  const [title, setTitle] = useState("");
  const [source, setSource] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");
  const [cuisine, setCuisine] = useState("");

  const mySubmitHandler = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        return <Redirect to="/home" />;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="recipeadd">
      <ion-icon
        name="chevron-back-outline"
        onClick={() => history.goBack()}
      ></ion-icon>

      <div className="popout">
        <h1>Add a New Recipe</h1>
        <form onSubmit={mySubmitHandler}>
          <div className="fields">
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="First Name"
              onChange={(e) => setFname(e.target.value)}
            />
            <br />
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Last Name"
              onChange={(e) => setLname(e.target.value)}
            />
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              type="password"
              id="confirmpass"
              name="confirmpass"
              placeholder="Re-enter Password"
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <input type="submit" value="Sign up" />
        </form>
      </div>
    </div>
  );
}

export default RecipeAdd;
