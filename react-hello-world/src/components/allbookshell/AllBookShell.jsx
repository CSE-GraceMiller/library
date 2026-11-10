import { useState } from "react";
import BookDialog from "../bookdialogue/BookDialog";
import "../bookdialogue/BookDialog"

function AllBookShell({ title, author, description, src, genres = [] }) {
  const [showDialog, setShowDialog] = useState(false);

  const showDetails = () => {
    setShowDialog(true);
  };

  const hideDetails = (e) => {
    e.stopPropagation();
    setShowDialog(false);
  };

  return (
    <article className="book-card-catalogue" onClick={showDetails}>
      <div className="book-cover">
        <img src={src} alt={title} />
      </div>
      <div className="book-info">
        <h3>{title}</h3>
        <p className="author">By {author}</p>
        <p className="book-desc">{description}</p>

        {genres.map((genre) => (
          <span key={genre.name} className={`genre-tag ${genre.className}`}>
            {genre.name}
          </span>
        ))}

        <label className="available"><input type="checkbox" defaultChecked disabled /> Available</label>
      </div>

      {showDialog && (<BookDialog
          title={title}
          author={author}
          description={description}
          close_dialog={hideDetails}
        />
      )}
    </article>
  );
}

export default AllBookShell;