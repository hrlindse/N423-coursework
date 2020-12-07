import {
  BrowserRouter as Router,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";

function Browse() {
  return (
    <div className="browse">
      <div className="top">
        <h1>Recipe Book</h1>
      </div>
      <div id="recipes">
        <div className="recipe">
          <div className="details">
            <h3>Recipe Name</h3>
            <div className="detail">
              <span className="label">Label</span>
              <span className="detail">Detail</span>
            </div>
            <div className="detail">
              <span className="label">Label</span>
              <span className="detail">Detail</span>
            </div>
            <div className="detail">
              <span className="label">Label</span>
              <span className="detail">Detail</span>
            </div>
            <Link to="/add">
              <div id="view-details">View details</div>
            </Link>
          </div>
          <div className="image">
            <img src=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Browse;
