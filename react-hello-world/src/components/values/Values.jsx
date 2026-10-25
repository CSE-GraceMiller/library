import "./Values.css";

import curiosityImg from "./images/curiosity-top.png";
import kindnessImg from "./images/kindness-top.png";
import communityImg from "./images/community-top.png";
import wonderImg from "./images/wonder-top.png";

function Values() {
  return (
    <section className="values">
      <div className="container">
        <div className="values-grid">
          <article className="value-card value-curiosity">
            <img src={curiosityImg} alt="" className="value-top-img" />
            <h3>Curiosity</h3>
            <p>
              We ask questions, explore new ideas, and encourage a love of reading
            </p>
            <span className="value-tag">Big Questions Brighter Minds</span>
          </article>

          <article className="value-card value-kindness">
            <img src={kindnessImg} alt="" className="value-top-img" />
            <h3>Kindness</h3>
            <p>
              We lead with empathy and respect for people, stories, and our world
            </p>
            <span className="value-tag">Kinder People Brighter Places</span>
          </article>

          <article className="value-card value-community">
            <img src={communityImg} alt="" className="value-top-img" />
            <h3>Community</h3>
            <p>
              We create a welcoming space where everyone belongs and matters
            </p>
            <span className="value-tag">Stronger Together Through Stories</span>
          </article>

          <article className="value-card value-wonder">
            <img src={wonderImg} alt="" className="value-top-img" />
            <h3>Wonder</h3>
            <p>
              We believe in the magic of stories to inspire readers for a bright tomorrow
            </p>
            <span className="value-tag">More stories brighter tommorows</span>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Values;