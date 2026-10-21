import "./UpComing.css";

import readingDragon from "./images/event-reading-dragon-exact.png";
import crafts from "./images/crafts.png";
import sleepyMoon from "./images/event-sleepy-moon-exact.png";

function ComingUp() {
  return (
    <section className="events">
      <div className="container">
        <div className="events-card">
          <h2>Coming up at Fully Booked</h2>

          <div className="events-grid">
            <div className="event">
              <div className="event-date">
                <span className="month">May</span>
                <span className="day">15</span>
              </div>
              <img src={readingDragon} alt="" className="event-img"/>
              <h3>Saturday Story-time</h3>
              <p>Sat, May 15 | 10:30 AM</p>
            </div>

            <div className="event">
              <div className="event-date">
                <span className="month">May</span>
                <span className="day">22</span>
              </div>
              <img src={crafts} alt="" className="event-img"/>
              <h3>Kids Craft Club</h3>
              <p>Sat, May 22 | 1:00 PM</p>
            </div>

            <div className="event">
              <div className="event-date">
                <span className="month">May</span>
                <span className="day">29</span>
              </div>
              <img src={sleepyMoon} alt="" className="event-img"/>
              <h3>Pajama Party</h3>
              <p>Sat, May 29 | 6:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComingUp;