function AllBookShell({ title, author, description, src, genres = [] }) {
  return (
    <article className="book-card-catalogue">
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
    </article>
  );
}

export default AllBookShell;