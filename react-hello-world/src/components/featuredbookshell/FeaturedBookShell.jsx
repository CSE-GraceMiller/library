function FeaturedBookShell({ title, description, src, genre, genreClass }) {
  return (
    <article className="featured-card">
      <div className="book-cover">
        <img src={src} alt={title} />
      </div>
      <h3>{title}</h3>
      <p className="book-desc">{description}</p>
      <span className={`genre-tag ${genreClass}`}>{genre}</span>
      <label className="available">
        <input type="checkbox" defaultChecked disabled />
        Available
      </label>
    </article>
  );
}

export default FeaturedBookShell;