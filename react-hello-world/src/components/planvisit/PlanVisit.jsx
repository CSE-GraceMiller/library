import "./PlanVisit.css";

import mapPin from "./images/map-pin-icon.png";
import clockIcon from "./images/clock-icon.png";
import carIcon from "./images/car-icon.png";
import accessibilityIcon from "./images/accessibility-icon.png";
import wifiIcon from "./images/wifi-transparent.png";
import paperPlane from "./images/paper-plane-icon.png";

function PlanVisit() {
  return (
    <section className="visit-info">
      <div className="container visit-info-grid">
        {/* Plan Your Visit Card */}
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

          {/* Amenities */}
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

          <a href="/" className="btn-primary btn-directions">
            <img src={paperPlane} alt="" className="btn-icon" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}

export default PlanVisit;