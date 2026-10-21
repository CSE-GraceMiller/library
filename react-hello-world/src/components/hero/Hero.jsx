import { NavLink } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h1>Where every story
            <br />
            begins</h1>
          <p>
            Fully Booked is a whimsical library where curious minds explore, imagine and grow. From sprawling adventures, to cozy corners, your next favorite story awaits
          </p>
          <NavLink to="/books" className="btn-primary">Explore the shelves</NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;