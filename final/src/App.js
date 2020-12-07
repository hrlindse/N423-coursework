import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";
import firebase from "firebase";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
} from "@react-firebase/auth";

//import components
import Account from "./components/account/Account";
import SplashScreen from "./components/account/SplashScreen";
import Home from "./components/home/Home";
import Calendar from "./components/calendar/Calendar";
import SignUp from "./components/account/SignUp";
import Login from "./components/account/Login";
import Add from "./components/menus/Add";
import PlanAdd from "./components/menus/PlanAdd";
import ForgotPassword from "./components/account/ForgotPassword";

// function initFirebase() {
//   firebase
//     .auth()
//     .signInAnonymously()
//     .then(function (result) {
//       firebase.auth().onAuthStateChanged(function (user) {
//         if (user) {
//           console.log("user signed in");
//           // User is signed in.
//           var displayName = user.displayName;
//           var email = user.email;
//           var emailVerified = user.emailVerified;
//           var photoURL = user.photoURL;
//           var isAnonymous = user.isAnonymous;
//           var uid = user.uid;
//           var providerData = user.providerData;
//           console.log("user:", displayName, email, user);
//           loggedIn = true;
//           _db = firebase.firestore();
//           // ...
//         } else {
//           // User is signed out.
//           // ...
//           loggedIn = false;
//           console.log("user not signed in");
//         }
//       });
//       console.log("connected");
//     });
// }

// function initListeners() {
//   $("#add").click(function () {
//     if (loggedIn) {
//       _db
//         .collection("names")
//         .add(fakeNews)
//         .then(function (doc) {
//           console.log("Added Data, ref num: ", doc.id);
//         });
//     } else console.log("log in to add data");
//   });

//   $("#signup").click(function () {
//     let email = "email@email.com";
//     let password = "password";
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then((result) => {
//         if (result.user) {
//           result.user
//             .updateProfile({
//               displayName: "Jane Q. User",
//               photoURL: "https://example.com/jane-q-user/profile.jpg",
//             })
//             .then(function () {
//               // Update successful.
//             })
//             .catch(function (error) {
//               // An update error happened.
//             });
//         }
//       })
//       .catch(function (error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // ...
//       });
//   });

//   $("#logout").click(function () {
//     firebase
//       .auth()
//       .signOut()
//       .then(function () {
//         // Sign-out successful.
//         console.log("Log Out");
//         _db = "";
//       })
//       .catch(function (error) {
//         // An error happened.
//         console.log("Log Out error");
//       });
//   });

//   $("#login").click(function () {
//     let email = "email@email.com";
//     let password = "password";
//     console.log("Log In");
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .catch(function (error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // ...
//       });
//   });
// }

function App() {
  const firebaseApp = firebase.apps[0];

  const config = {
    apiKey: "AIzaSyALHbrsKWUAtpnnww5tLxL-oTXSs-ipGUM",
    authDomain: "n423-final.firebaseapp.com",
    projectId: "n423-final",
    storageBucket: "n423-final.appspot.com",
    messagingSenderId: "682925542433",
    appId: "1:682925542433:web:263c1b869f6895c2966760",
    measurementId: "G-R49Y29Y00E",
  };
  return (
    <Router>
      <FirebaseAuthProvider firebase={firebase} {...config}>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            return <Redirect to="/splashscreen" />;
          }}
        </FirebaseAuthConsumer>
        <div>
          <IfFirebaseAuthed>
            {() => {
              return <Redirect to="/home" />;
            }}
          </IfFirebaseAuthed>
          <IfFirebaseAuthedAnd
            filter={({ providerId }) => providerId !== "anonymous"}
          >
            {({ providerId }) => {
              return <div>You are authenticated with {providerId}</div>;
            }}
          </IfFirebaseAuthedAnd>
        </div>
      </FirebaseAuthProvider>
      <div className="App">
        <Switch>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgot">
            <ForgotPassword />
          </Route>
          <Route path="/splashscreen">
            <SplashScreen />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/planadd">
            <PlanAdd />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <nav>
          <ul>
            <li>
              <NavLink to="/home" activeClassName="active">
                <div>
                  <ion-icon name="home"></ion-icon>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/calendar" activeClassName="active">
                <div>
                  <ion-icon name="calendar"></ion-icon>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/add" activeClassName="active">
                <div>
                  <ion-icon name="add"></ion-icon>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/plan" activeClassName="active">
                <div>
                  <ion-icon name="book"></ion-icon>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/account" activeClassName="active">
                <div>
                  <ion-icon name="settings"></ion-icon>
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;
