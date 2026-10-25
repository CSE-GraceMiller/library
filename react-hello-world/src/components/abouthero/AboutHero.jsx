import "./AboutHero.css";
import { NavLink } from "react-router-dom";

import bookIcon from "./images/book-icon-white.png";

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="container about-hero-inner">
        <div className="about-hero-text">
          <h1>
            Our Story
            <br />
            Begins With You
          </h1>
          <p>
            Fully Booked is a whimsical library where curious minds explore, imagine and grow. From sprawling adventures, to cozy corners, your next favorite story awaits
          </p>
          <NavLink to="/books" className="btn-primary">
          <img src={bookIcon} alt="" className="btn-icon" />
          Explore the shelves
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;