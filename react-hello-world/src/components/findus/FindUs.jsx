import "./FindUs.css";

import mapIcon from "./images/folded-map-icon.png";
import libraryMap from "./images/library-map-card.png";

function FindUs() {
  return (
    <div className="visit-card map-card">
      <h2>
        <img src={mapIcon} alt="" className="card-title-icon" />
        Find Us Here
      </h2>
      <img src={libraryMap} alt="" className="map-img"/>
    </div>
  );
}

export default FindUs;