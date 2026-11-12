import { useState } from "react";
import { API_BASE_URL } from "../../config";
import "./AddBook.css";

const AddBook = (props) => {
  const [prevSrc, setPrevSrc] = useState("");
  const [result, setResult] = useState("");

  const uploadImage = (e) => {
    setPrevSrc(URL.createObjectURL(e.target.files[0]));
  };

  const addBookToServer = async (e) => {
    e.preventDefault();
    setResult("Sending ...");
    const formData = new FormData(e.target);

    const response = await fetch(`${API_BASE_URL}/api/books`, {
      method: "POST",
      body: formData,
    });

    if (response.status === 200) {
      setResult("Book successfully added");
      props.add_book_to_list(await response.json());
      props.close_dialog();
    } 
    else {
      setResult("Error Adding Book");
    }
  };

  return (
    <div id="add-book-dialog" className="w3-modal" style={{ display: "block" }}>
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.close_dialog}>
            &times;
          </span>
        </div>

        <div id="book-dialog-content">
          <h2>Add Book</h2>

          <form onSubmit={addBookToServer}>
            <p>
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" required minLength="3"/>
            </p>

            <p>
              <label htmlFor="author">Author:</label>
              <input type="text" id="author" name="author" required />
            </p>

            <p>
              <label htmlFor="description">Description:</label>
              <textarea id="description" name="description" required minLength="10"></textarea>
            </p>

            <p>
              <label htmlFor="genre">Genre:</label>
              <input type="text" id="genre" name="genre" required />
            </p>

            <p>
              <label htmlFor="available">
                <input type="checkbox" id="available" name="available" value="true" defaultChecked/>
                Available</label>
            </p>

            <section>
              <p id="img-prev-section">
                {prevSrc === "" ? (""):(
                  <img id="img-prev" src={prevSrc} alt="Preview" />
                )}
              </p>
              <p>
                <label htmlFor="img">Select Image</label>
                <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage}/>
              </p>
            </section>

            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;