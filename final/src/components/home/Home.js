import { BrowserRouter as Router, Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="top">
        <h1>What's on the menu?</h1>
      </div>
      <Link className="button" to="/add">
        <div id="add-recipe">Add to your meal plan</div>
      </Link>

      <div id="upcoming">
        <h2>Today's Dinner</h2>
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

        <h2>Tomorrow's Lunch</h2>
      </div>

      <Link className="button" to="/plan">
        <div id="view-plan">View your full plan</div>
      </Link>
    </div>
  );
}

export default Home;
