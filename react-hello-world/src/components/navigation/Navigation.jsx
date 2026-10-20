import "./Navigation.css";
import { NavLink } from "react-router-dom";
import {HashLink} from "react-router-hash-link"

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
          <NavLink to="/" end className={
            ({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
            <img src={homeIcon} className="nav-icon" />
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <img src={bookIcon} className="nav-icon" />
            Books
          </NavLink>
        </li>

        <li>
          <NavLink to="/movies" className="nav-link">
            <img src={movieIcon} className="nav-icon" />
            Movies
          </NavLink>
        </li>

        <li>
          <NavLink to="/visit" className="nav-link">
            <img src={locationIcon} className="nav-icon" />
            Visit
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className="nav-link">
            <img src={aboutIcon} className="nav-icon" />
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;