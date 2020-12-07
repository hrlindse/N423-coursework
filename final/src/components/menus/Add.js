import {
  BrowserRouter as Router,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";

function Add() {
  let history = useHistory();
  return (
    <div className="add menu">
      <div className="popout">
        <h1>Add to your meal plan</h1>
        <Link to="/browse">
          <div>Browse recipe book</div>
        </Link>
        <Link to="/search">
          <div>Search for new recipe</div>
        </Link>
        <Link to="/recipeadd">
          <div>Manually enter new recipe</div>
        </Link>
        <Link onClick={() => history.goBack()}>Cancel</Link>
      </div>
      <div className="below"></div>
    </div>
  );
}

export default Add;
