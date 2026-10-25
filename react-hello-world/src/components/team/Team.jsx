import "./Team.css";

import maya from "./images/maya-portrait.png";
import daniel from "./images/daniel-portrait.png";
import ellie from "./images/ellie-portrait.png";

function Team() {
  return (
    <div className="our-team">
      <h2 className="section-title">Our Team</h2>

      <div className="team-grid">
        <article className="team-card">
          <img src={maya} alt="" className="team-photo" />
          <h3>Maya Chen</h3>
          <p className="role">Library Director</p>
        </article>

        <article className="team-card">
          <img src={daniel} alt="" className="team-photo" />
          <h3>Daniel Brooks</h3>
          <p className="role">Community Coordinator</p>
        </article>

        <article className="team-card">
          <img src={ellie} alt="" className="team-photo" />
          <h3>Ellie Park</h3>
          <p className="role">Children’s Program Lead</p>
        </article>
      </div>
    </div>
  );
}

export default Team;