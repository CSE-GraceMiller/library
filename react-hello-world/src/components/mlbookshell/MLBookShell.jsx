
function MLBookShell({ title, author, src }) {
  return (
    <article className="book-card">
      <div className="book-cover">
        <img src={src} alt={title} />
      </div>
      <h3>{title}</h3>
      <p className="author">by {author}</p>
      <button className="heart">♡</button>
    </article>
  );
}

export default MLBookShell;