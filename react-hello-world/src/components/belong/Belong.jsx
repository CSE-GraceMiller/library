import "./Belong.css";
import { NavLink } from "react-router-dom";

import openBook from "./images/open-book-banner.png";
import locationPin from "./images/location-pin2.png";

function Belong() {
  return (
    <section className="belong-cta">
      <div className="container belong-inner">
        <div className="belong-left">
          <img src={openBook} alt="" className="open-book-img"/>
          <div className="belong-text">
            <h2>Everyone has a place at Fully Booked</h2>
            <p>
              Whether you’re a reader, dreamer, or a movie lover, you belong here.
            </p>
          </div>
        </div>

        <NavLink to="/visit" className="btn-primary">
          <img src={locationPin} alt="" className="btn-icon" />
          Visit Us
        </NavLink>
      </div>
    </section>
  );
}

export default Belong;