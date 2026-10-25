import "./MovieGenres.css";

import purpleStar from "./images/purple-star.png";
import familyIcon from "./images/family-transparent.png";
import tealMountains from "./images/teal-mountains.png";
import purpleSparkles from "./images/purple-sparkles.png";
import orangeGlobe from "./images/orange-globe.png";

function MovieGenres() {
  return (
    <>
      <section className="movie-categories">
        <div className="container">
          <div className="category-pills">
            <button className="category-pill kids">
              <img src={purpleStar} alt="" className="pill-icon" />
              Kids
            </button>
            <button className="category-pill family">
              <img src={familyIcon} alt="" className="pill-icon" />
              Family
            </button>
            <button className="category-pill adventure">
              <img src={tealMountains} alt="" className="pill-icon" />
              Adventure
            </button>
            <button className="category-pill animation">
              <img src={purpleSparkles} alt="" className="pill-icon" />
              Animation
            </button>
            <button className="category-pill documentary">
              <img src={orangeGlobe} alt="" className="pill-icon" />
              Documentary
            </button>
          </div>
        </div>
      </section>

      <section className="friday-picks">
        <div className="container">
          <div className="friday-banner">
            <h2>Friday Family Film Picks</h2>
            <p>
              Cozy up this Friday with a special selection of feel-good films for all ages
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MovieGenres;