import clockIcon from "./images/clock-icon.png";

function MovieShell({ title, description, src, runtime }) {
  return (
    <article className="movie-card">
      <div className="movie-poster">
        <img src={src} alt={title} />
      </div>
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="runtime">
          <img src={clockIcon} alt="" className="clock-icon" />
          {runtime}
        </span>
      </div>
    </article>
  );
}

export default MovieShell;