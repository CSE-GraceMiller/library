import "./Header.css";
import logo from "./images/fully-booked-logo.png";
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <header className="main-header">
            <div className="header-inner">
                <a href="#" className="logo">
                <img id="logo" src={logo} alt="Fully Booked Logo" />
                <span>Fully Booked</span>
                </a>
                <Navigation />
                </div>
                </header>
                );
            };

export default Header;