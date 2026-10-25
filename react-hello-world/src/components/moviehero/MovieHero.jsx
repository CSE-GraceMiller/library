import "./MovieHero.css";

import searchIcon from "./images/search-icon-teal.png";

function MovieHero() {
  return (
    <section className="movie-hero">
      <div className="container movie-hero-inner">
        <div className="movie-hero-text">
          <h1>
            Movie Magic,
            <br />
            Ready for
            <br />
            Check-out
          </h1>

          <div className="movie-search">
            <div className="search-input-wrap">
              <span className="search-icon">
                <img src={searchIcon} alt="Search" />
              </span>
              <input
                type="text"
                placeholder="Search movies and shows"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieHero;