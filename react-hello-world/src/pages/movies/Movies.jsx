import MovieHero from "../../components/moviehero/MovieHero";
import MovieGenres from "../../components/moviegenres/MovieGenres";
import MovieGrid from "../../components/moviegrid/MovieGrid";

const Movies = () => {
  return (
    <>
      <MovieHero />
      <MovieGenres />
      <div className="container movie-grid-wrapper">
        <MovieGrid />
      </div>
    </>
  );
};

export default Movies;