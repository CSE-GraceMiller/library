import "./BookDialog.css";

const BookDialog = (props) => {
  return (
    <div id="book-dialog" className="w3-modal" style={{ display: "block" }}>
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
          <h2>{props.title}</h2>
          <p><strong>Author:</strong> {props.author}</p>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDialog;