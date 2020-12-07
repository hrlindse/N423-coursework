import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";
import firebase from "firebase";
import db from "../account/SignUp";

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
    db.collection("cities")
      .doc("LA")
      .set({
        name: "Los Angeles",
        state: "CA",
        country: "USA",
      })
      .then(function () {
        console.log("Document successfully written!");
        return <Redirect to="/browse" />;
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
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
              id="title"
              name="title"
              placeholder="Enter Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <input
              type="text"
              id="source"
              name="source"
              placeholder="Enter Source (URL, Book, etc.)"
              onChange={(e) => setSource(e.target.value)}
            />
            <br />
            <input
              type="text"
              id="ingredients"
              name="ingredients"
              placeholder="Enter Ingredients"
              height="50px"
              onChange={(e) => setIngredients(e.target.value)}
            />
            <br />
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Enter Directions"
              height="50px"
              onChange={(e) => setDirections(e.target.value)}
            />
            <br />
            <input
              type="text"
              id="confirmpass"
              name="confirmpass"
              placeholder="Type of Cuisine"
              onChange={(e) => setCuisine(e.target.value)}
            />
          </div>
          <input type="submit" value="Save" />
        </form>
      </div>
    </div>
  );
}

export default RecipeAdd;
