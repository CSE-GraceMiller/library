import "./Navigation.css";

import homeIcon from "./images/home-transparent.png";
import bookIcon from "./images/book-icon-white.png";
import movieIcon from "./images/cd-icon-white.png";
import locationIcon from "./images/location-transparent.png";
import aboutIcon from "./images/search-transparent.png";

const Navigation = () => {
    return (
    <nav id="main-nav" className="nav">
        <ul>
        <li>
          <a href="#" className="nav-link">
            <img src={homeIcon} alt="" className="nav-icon" />
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            <img src={bookIcon} alt="" className="nav-icon" />
            Books
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            <img src={movieIcon} alt="" className="nav-icon" />
            Movies
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            <img src={locationIcon} alt="" className="nav-icon" />
            Visit
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            <img src={aboutIcon} alt="" className="nav-icon" />
            About
          </a>
        </li>
      </ul>
      </nav>
    );
};

export default Navigation;