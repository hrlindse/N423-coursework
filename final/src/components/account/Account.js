import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import SplashScreen from "./SplashScreen";
import SignUp from "./SignUp";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";

function Account() {
  return (
    <div className="account">
      <SplashScreen />
    </div>
  );
}

export default Account;
