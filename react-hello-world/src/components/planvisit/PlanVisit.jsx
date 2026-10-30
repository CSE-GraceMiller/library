import { useState } from "react";
import "./PlanVisit.css";

import mapPin from "./images/map-pin-icon.png";
import clockIcon from "./images/clock-icon.png";
import carIcon from "./images/car-icon.png";
import accessibilityIcon from "./images/accessibility-icon.png";
import wifiIcon from "./images/wifi-transparent.png";
import paperPlane from "./images/paper-plane-icon.png";

function PlanVisit() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="visit-card plan-card">
      <h2>Plan Your Visit</h2>

      <div className="plan-item">
        <img src={mapPin} alt="" className="plan-icon-img" />
        <div>
          <strong>123 Storybook Lane</strong>
          <br />
          Willow Creek, SC 12345
        </div>
      </div>

      <div className="plan-item">
        <img src={clockIcon} alt="" className="plan-icon-img" />
        <div>
          <strong>Hours</strong>
          <br />
          Mon–Thu  9:00 AM – 7:00 PM
          <br />
          Fri–Sat  9:00 AM – 5:00 PM
          <br />
          Sun  12:00 PM – 4:00 PM
        </div>
      </div>

      <div className="amenities">
        <div className="amenity">
          <img src={carIcon} alt="" className="amenity-icon-img" />
          <span>Free Parking</span>
        </div>
        <div className="amenity">
          <img src={accessibilityIcon} alt="" className="amenity-icon-img" />
          <span>Wheelchair Accessible</span>
        </div>
        <div className="amenity">
          <img src={wifiIcon} alt="" className="amenity-icon-img" />
          <span>Free Wi-fi</span>
        </div>
      </div>

      {!showMap && (
        <button
          type="button"
          className="btn-primary btn-directions"
          onClick={() => setShowMap(true)}>
          <img src={paperPlane} alt="" className="btn-icon" />Get Directions</button>
      )}

      {showMap && (
        <div className="map-container">
          <iframe
            title="Directions to Earth, Texas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13539.567!2d-100.199!3d34.233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ee3b8b8b8b8b8b%3A0x0!2sEarth%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </div>
  );
}

export default PlanVisit;