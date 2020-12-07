import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";
import firebase from "firebase";
import "firebase/auth";
//css from menus.scss

var fname;
var lname;
var email;
var password;
var password2;
var db = "";

function SignUp() {
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

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  console.log(fname);
  console.log(lname);
  console.log(email);
  console.log(password);
  console.log(password2);

  var loggedIn;

  const mySubmitHandler = (event) => {
    event.preventDefault();
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("There is a user");
      } else {
        // User is signed out.
        // ...
        loggedIn = false;
        console.log("No user");
        db = "";
      }
    });

    firebase
      .auth()
      .signInAnonymously()
      .then(function (result) {
        db = firebase.firestore();
        return <Redirect to="/home" />;
      });
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((user) => {
    //     // Signed in
    //     return <Redirect to="/home" />;
    //   })
    //   .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // ..
    //   });
    // .then((result) => {
    //   if (result.user) {
    //     result.user
    //       .updateProfile({
    //         fname: fname,
    //         lname: lname,
    //       })
    //       .then(function () {
    //         // Update successful.

    //       })
    //       .catch(function (error) {
    //         // An update error happened.
    //       });
    //   }
    // })
    // .catch(function (error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // ...
    // });
  };

  return (
    <div className="signup menu">
      <ion-icon
        name="chevron-back-outline"
        onClick={() => history.goBack()}
      ></ion-icon>

      <div className="popout">
        <h1>Create an account</h1>
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
      <div className="below">
        <Link to="/login">Already have an account? Log in</Link>
      </div>
    </div>
  );
}

export { db };
export default SignUp;
