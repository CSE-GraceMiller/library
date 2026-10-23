import BookHero from "../../components/bookhero/BookHero";
import Filter from "../../components/filter/Filter";
import SearchFeatured from "../../components/searchfeatured/SearchFeatured";
import "./Books.css";

const Books = () => {
    return (
    <>
      <BookHero />

      <div className="books-layout">
        <Filter />
        
        <div className="books-main">
          <SearchFeatured />
        </div>
      </div>
    </>
  );
};

export default Books;