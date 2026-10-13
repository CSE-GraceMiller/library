import "./Header.css";
import logo from "./images/fully-booked-logo.png";
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <header className="main-header">
            <img id="logo" src={logo} alt="fb-logo"></img>
            <h1>Hi</h1>
            <Navigation />
        </header>
    );
};

export default Header;