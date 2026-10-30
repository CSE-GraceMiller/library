import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./Team.css";

import maya from "./images/maya-portrait.png";
import daniel from "./images/daniel-portrait.png";
import ellie from "./images/ellie-portrait.png";

function Team() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="our-team">
      <h2 className="section-title">Our Team</h2>

      <div className="team-grid">
        <article className="team-card">
          <button type="button" className="team-photo-btn" onClick={() => setIndex(0)}>
            <img src={maya} alt="" className="team-photo" />
          </button>
          <h3>Maya Chen</h3>
          <p className="role">Library Director</p>
        </article>

        <article className="team-card">
          <button type="button" className="team-photo-btn" onClick={() => setIndex(1)}>
            <img src={daniel} alt="" className="team-photo" />
          </button>
          <h3>Daniel Brooks</h3>
          <p className="role">Community Coordinator</p>
        </article>

        <article className="team-card">
          <button type="button" className="team-photo-btn" onClick={() => setIndex(2)}>
            <img src={ellie} alt="" className="team-photo" />
          </button>
          <h3>Ellie Park</h3>
          <p className="role">Children’s Program Lead</p>
        </article>
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={[
          { src: maya},
          { src: daniel},
          { src: ellie},
        ]}
      />
    </div>
  );
}

export default Team;