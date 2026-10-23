import "./SearchFeatured.css";
import FeaturedBookShell from "../featuredbookshell/FeaturedBookShell";

import searchIcon from "./images/search-icon-teal.png";
import treehouseTales from "./images/book-treehouse-tales.png";
import braveLittleWhale from "./images/book-brave-little-whale.png";
import lunasNightlight from "./images/book-lunas-nightlight.png";

function SearchFeatured() {
  return (
    <>
      <div className="search-bar">
        <div className="search-input-wrap">
          <img src={searchIcon} alt="Search" className="search-icon-img" />
          <input type="text" placeholder="Search by Title, Author, or Topic"/>
        </div>
        <button className="btn-search">Search</button>
      </div>

      <div className="featured-section">
        <h2 className="featured-title">
          <span className="star">★</span> Featured This Week{" "}
          <span className="star">★</span>
        </h2>

        <div className="featured-grid">
          <FeaturedBookShell
            title="The Secret in the Maple Tree"
            description="Magic can happen anywhere"
            src={treehouseTales}
            genre="Adventure"
            genreClass="adventure"/>
          <FeaturedBookShell
            title="The Brave Little Whale"
            description="A small whale with big dreams"
            src={braveLittleWhale}
            genre="Animals"
            genreClass="animals"/>
          <FeaturedBookShell
            title="Luna’s Nightlight"
            description="Luna learns about bravery"
            src={lunasNightlight}
            genre="Friendship"
            genreClass="friendship"/>
        </div>
      </div>
    </>
  );
}

export default SearchFeatured;