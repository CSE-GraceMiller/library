import "./AllBooks.css";

import AllBookShell from "../allbookshell/AllBookShell";
import {useState, useEffect} from "react";
import axios from "axios";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  //after the page has loaded
  useEffect(()=>{
    const loadBooks = async()=>{
      const response = await axios.get("https://fullybooked-backend.onrender.com/api/books/")
      setBooks(response.data);
    };

    loadBooks();
  },[]);


  return (
    <div className="all-books-section">
      <h2 className="section-title">All Books</h2>

      <div className="all-books-grid">
        {books.map((book) => (
          <AllBookShell
            title={book.title}
            author={book.author}
            description={book.description}
            src={`https://fullybooked-backend.onrender.com/images/${book.img_name}`}
            genres={book.genres || []}
          />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;