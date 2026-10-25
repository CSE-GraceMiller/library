import "./HappeningToday.css";

import calendarIcon from "./images/calendar-star-icon.png";
import bunnyImg from "./images/bunny-reading-card.png";

function HappeningToday() {
  return (
    <div className="visit-card events-today-card">
      <h2>
        <img src={calendarIcon} alt="" className="card-title-icon" />
        What’s Happening Today
      </h2>

      <div className="today-event">
        <img src={bunnyImg} alt="" className="today-event-img"/>
        <div className="today-event-content">
          <h3>Story time</h3>
          <p className="event-time">Today at 10:30 AM</p>
          <p>Join us for a magical morning of stories and new friends</p>
        </div>
      </div>
    </div>
  );
}

export default HappeningToday;