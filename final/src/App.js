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
import RecipeAdd from "./components/recipe/RecipeAdd";
import MealPlanAdd from "./components/recipe/MealPlanAdd";
import Browse from "./components/recipeBook/Browse";
import Search from "./components/recipeSearch/Search";
import ForgotPassword from "./components/account/ForgotPassword";

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
      {/* <FirebaseAuthProvider firebase={firebase} {...config}>
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
      </FirebaseAuthProvider> */}
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
          <Route path="/browse">
            <Browse />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipeadd">
            <RecipeAdd />
          </Route>
          <Route path="/mealplanadd">
            <MealPlanAdd />
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
              <NavLink to="/browse" activeClassName="active">
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
