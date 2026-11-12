import "./AllBooks.css";
import AllBookShell from "../allbookshell/AllBookShell";
import AddBook from "../addbook/AddBook";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../config";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [pending, setPending] = useState(true);
  const [showAddDialog, setShowAddDialog] = useState(false);

  const openAddDialog = () => setShowAddDialog(true);
  const closeAddDialog = () => setShowAddDialog(false);

  const addBookToList = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  useEffect(() => {
    const loadBooks = async () => {
      const response = await axios.get(`${API_BASE_URL}/api/books/`);
      setPending(false);
      setBooks(response.data);
    };
    loadBooks();
  }, []);

  return (
    <div className="all-books-section">
      <div className="all-books-header">
        <h2 className="section-title">All Books</h2>
        <button className="btn-add-book" onClick={openAddDialog}>
          + Add Book
        </button>
      </div>

      {showAddDialog && (<AddBook
          close_dialog={closeAddDialog}
          add_book_to_list={addBookToList}/>
      )}

      <div className="all-books-grid">
        {pending && <p>Loading books...</p>}
        {books.map((book) => (
          <AllBookShell
            key={book._id}
            title={book.title}
            author={book.author}
            description={book.description}
            src={`${API_BASE_URL}/images/${book.img_name}`}
            genre={book.genre}
          />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;