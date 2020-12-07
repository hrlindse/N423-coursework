import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SplashScreen from "./components/account/SplashScreen";
import reportWebVitals from "./reportWebVitals";
import Icon, { Ionicons, MaterialIcons } from "react-web-vector-icons";
import firebase from "firebase";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
} from "@react-firebase/auth";

require("react-web-vector-icons/fonts");

//icons https://oblador.github.io/react-native-vector-icons/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
