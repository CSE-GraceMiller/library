import "./AllBooks.css";

import AllBookShell from "../allbookshell/AllBookShell";

import pipPlants from "./images/book-pip-plants-a-planet.png";
import cloudCollectors from "./images/book-the-cloud-collectors.png";
import robotWhoRead from "./images/book-the-robot-who-read.png";
import mossyCreek from "./images/book-the-mystery-of-mossy-creek.png";
import houseForEveryone from "./images/book-a-house-for-everyone.png";
import stellaShootingStar from "./images/book-stella-and-the-shooting-star.png";

const AllBooks = () => {
  return (
    <div className="all-books-section">
      <h2 className="section-title">All Books</h2>

      <div className="all-books-grid">
        <AllBookShell
          title="Pip Plants a Planet"
          author="Elin Carter"
          description="A little act of kindness can grow a greener world"
          src={pipPlants}
          genres={[{ name: "Environment", className: "environment" }]}
        />

        <AllBookShell
          title="The Cloud Collectors"
          author="Nora Fields"
          description="Two friends chase clouds and find something even better"
          src={cloudCollectors}
          genres={[
            { name: "Adventure", className: "adventure" },
            { name: "Friendship", className: "friendship" },
          ]}
        />

        <AllBookShell
          title="The Robot Who Read"
          author="Kai Mendoza"
          description="A Robot discovers that stories can change everthing"
          src={robotWhoRead}
          genres={[{ name: "Friendship", className: "friendship" }]}
        />

        <AllBookShell
          title="The Mystery of Willow Creek"
          author="Jack Holloway"
          description="Three friends, one clue, a summer to remember"
          src={mossyCreek}
          genres={[
            { name: "Adventure", className: "adventure" },
            { name: "Friendship", className: "friendship" },
          ]}
        />

        <AllBookShell
          title="A House For Everyone"
          author="Mateo Singh"
          description="Different homes, one big world, a celebration of belonging"
          src={houseForEveryone}
          genres={[
            { name: "Animals", className: "animals" },
            { name: "Friendship", className: "friendship" },
          ]}
        />

        <AllBookShell
          title="Stella and The Shooting Star"
          author="Priya Raman"
          description="The biggest dreams start with a small wish"
          src={stellaShootingStar}
          genres={[{ name: "Adventure", className: "adventure" }]}
        />
      </div>
    </div>
  );
};

export default AllBooks;