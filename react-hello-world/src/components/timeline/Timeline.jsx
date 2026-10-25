import "./Timeline.css";
import timelineImg from "./images/library-timeline.png";

function Timeline() {
  return (
    <div className="our-story">
      <h2 className="section-title">Our Story</h2>
      <img src={timelineImg} alt="" className="timeline-img"/>
    </div>
  );
}

export default Timeline;