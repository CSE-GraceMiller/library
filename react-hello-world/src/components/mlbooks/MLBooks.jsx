import "./MLBooks.css";

import moonlightMap from "./images/moonlight-map.png";
import littleFox from "./images/little-fox-big-day.png";
import miraCloudGarden from "./images/mira-cloud-garden.png";

function MLBooks() {
  return (
    <section className="most-loved" id="catalogue">
      <div className="container">
        <h2 className="section-title">Most-Loved books</h2>

        <div className="books-grid">
          {/* Moonlight Map */}
          <article className="book-card">
            <div className="book-cover">
              <img src={moonlightMap} alt="Moonlight Map" />
            </div>
            <h3>Moonlight Map</h3>
            <p className="author">by Lara Finch</p>
            <button className="heart">♡</button>
          </article>

          {/* Little Fox */}
          <article className="book-card">
            <div className="book-cover">
              <img src={littleFox} alt="The Little Fox’s Big Day" />
            </div>
            <h3>The Little Fox’s Big Day</h3>
            <p className="author">by Theo Brightly</p>
            <button className="heart">♡</button>
          </article>

          {/* Cloud Garden */}
          <article className="book-card">
            <div className="book-cover">
              <img src={miraCloudGarden} alt="Mira and the Cloud Garden" />
            </div>
            <h3>Mira and the Cloud Garden</h3>
            <p className="author">by Lila Greenwood</p>
            <button className="heart">♡</button>
          </article>
        </div>
      </div>
    </section>
  );
}

export default MLBooks;