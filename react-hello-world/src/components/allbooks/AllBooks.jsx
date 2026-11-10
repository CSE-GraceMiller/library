import "./AllBooks.css";

import AllBookShell from "../allbookshell/AllBookShell";
import {useState, useEffect} from "react";
import axios from "axios";
import { API_BASE_URL } from "../../config";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [pending, setPending] = useState(true);

  //after the page has loaded
  useEffect(()=>{
    const loadBooks = async()=>{
      const response = await axios.get(`${API_BASE_URL}/api/books/`);
      setPending(false);
      setBooks(response.data);
    };

    loadBooks();
  },[]);


  return (
    <div className="all-books-section">
      <h2 className="section-title">All Books</h2>

      <div className="all-books-grid">
        {pending && <p>Loading books...</p>}
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