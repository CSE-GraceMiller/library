import BookHero from "../../components/bookhero/BookHero";
import Filter from "../../components/filter/Filter";
import SearchFeatured from "../../components/searchfeatured/SearchFeatured";
import AllBooks from "../../components/allbooks/AllBooks";
import "./Books.css";

const Books = () => {
    return (
    <>
      <BookHero />
      <div className="books-layout">
        <Filter />
        <div className="books-main">
          <SearchFeatured />
          <AllBooks />
        </div>
      </div>
    </>
  );
};

export default Books;