import "./MovieGrid.css";

import MovieShell from "../moviesshell/MovieShell";

import boyAndRobot from "./images/movie-boy-and-robot.png";
import seaTurtle from "./images/movie-sea-turtle.png";
import paintingGirl from "./images/movie-painting-girl.png";
import girlAndBear from "./images/movie-girl-and-bear.png";
import telescopeDog from "./images/movie-telescope-dog.png";
import floatingCastle from "./images/movie-floating-castle.png";
import coveMovie from "./images/cove-movie.png";
import mirrorMeadow from "./images/mirror-meadow-movie.png";
import postmanMovie from "./images/postman-movie.png";
import songSea from "./images/song-sea-movie.png";

const MovieGrid = () => {
  return (
    <div className="movie-grid">
      <MovieShell
        title="A Little Brighter"
        description="A curious kid and robot discover that kindness can change the world"
        src={boyAndRobot}
        runtime="93 minutes"/>
      <MovieShell
        title="Tides of Tomorrow"
        description="A young turtle’s journey shows how every action makes a difference"
        src={seaTurtle}
        runtime="87 minutes"/>
      <MovieShell
        title="Colorful Lines"
        description="A girl discovers a world that’s more colorful than she ever imagined"
        src={paintingGirl}
        runtime="89 minutes"/>
      <MovieShell
        title="The Bravest Kind"
        description="A Quiet girl, a shy bear, and a daring plan to find home"
        src={girlAndBear}
        runtime="84 minutes"/>
      <MovieShell
        title="Star Friends"
        description="Two friends discover the best adventures are the ones you share"
        src={telescopeDog}
        runtime="96 minutes"/>
      <MovieShell
        title="Cloudside Adventures"
        description="With the map missing, their adventure is just beginning"
        src={floatingCastle}
        runtime="101 minutes"/>
      <MovieShell
        title="The Clockwork Cove"
        description="Two friends race the sunset to fix a tiny sailboat’s ticking heart"
        src={coveMovie}
        runtime="91 minutes"/>
      <MovieShell
        title="Meadow of Mirrors"
        description="A girl and a fox follow a sparkling bird through a magical meadow"
        src={mirrorMeadow}
        runtime="88 minutes"/>
      <MovieShell
        title="The Skybound Postman"
        description="A young pilot and his dog deliver one last letter between floating islands"
        src={postmanMovie}
        runtime="94 minutes"/>
      <MovieShell
        title="The Secret Song of the Sea"
        description="A child follows a whale’s melody toward a hidden ocean promise"
        src={songSea}
        runtime="90 minutes"/>
    </div>
  );
};

export default MovieGrid;