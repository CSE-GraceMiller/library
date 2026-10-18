import "./Navigation.css";

const Navigation = () => {
    return (
    <nav id="main-nav" className="nav">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/books">Books</a>
        </li>
        <li>
          <a href="/movies">Movies</a>
        </li>
        <li>
          <a href="/visit">Visit</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
      </nav>
    );
};

export default Navigation;