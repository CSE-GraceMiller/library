import "./Footer.css";
import { NavLink } from "react-router-dom";

import logo from "./images/fully-booked-logo.png";
import instagram from "./images/instagram-transparent.png";
import facebook from "./images/facebook-transparent.png";
import youtube from "./images/youtube-transparent.png";
import email from "./images/email-transparent.png";
import booksCoffee from "./images/books-coffee.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <img src={logo} alt="Fully Booked Logo" className="footer-logo" />
            <span>Fully Booked</span>
          </div>
          <p>
            Stories connect us.
            <br />
            Libraries bring us together
          </p>
        </div>

        <div className="footer-col">
          <h4>Hours</h4>
          <p>Mon-Thu | 9:00 AM – 7:00 PM</p>
          <p>Fri-Sat | 9:00 AM – 5:00 PM</p>
          <p>Sun | 12:00 PM – 4:00 PM</p>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <div className="socials">
            <a href="#"><img src={instagram} alt="" /></a>
            <a href="#"><img src={facebook} alt="" /></a>
            <a href="#" ><img src={youtube} alt="" /></a>
            <a href="#"><img src={email} alt="" /></a>
          </div>
        </div>

        <div className="footer-col footer-navigation">
          <h4>Navigation</h4>
          <div className="footer-nav-wrapper">
            <nav className="footer-nav">
              <NavLink to="/" end>Home</NavLink>
              <span className="sep">|</span>
              <NavLink to="/books">Books</NavLink>
              <span className="sep">|</span>
              <NavLink to="/movies">Movies</NavLink>
              <span className="sep">|</span>
              <NavLink to="/visit">Visit</NavLink>
              <span className="sep">|</span>
              <NavLink to="/about">About</NavLink>
            </nav>
            <img src={booksCoffee} alt="" className="footer-illustration"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;