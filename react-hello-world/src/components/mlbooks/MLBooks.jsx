import "./MLBooks.css";
import Book from "../mlbookshell/MLBookShell";

import moonlightMap from "./images/moonlight-map.png";
import littleFox from "./images/little-fox-big-day.png";
import miraCloudGarden from "./images/mira-cloud-garden.png";

const MLBooks = () => {
  return (
    <section className="most-loved" id="catalogue">
      <div className="container">
        <h2 className="section-title">Most-Loved books</h2>

        <div className="books-grid">
          <Book title="Moonlight Map" author="Lara Finch" src={moonlightMap}/>
          <Book title="The Little Fox’s Big Day" author="Theo Brightly" src={littleFox}/>
          <Book title="Mira and the Cloud Garden" author="Lila Greenwood" src={miraCloudGarden}/>
        </div>
      </div>
    </section>
  );
};

export default MLBooks;