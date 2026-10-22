import "./Spaces.css";

import libraryPic1 from "./images/library-pic-1.png";
import libraryPic2 from "./images/library-pic-2.png";
import libraryPic3 from "./images/library-pic-3.png";

function Spaces() {
  return (
    <section className="spaces">
      <div className="container spaces-inner">
        <div className="spaces-text">
          <h2>
            A place to wonder,
            <br />
            create, and belong
          </h2>
          <p>
            From sunny reading nooks to creative spaces and friendly faces,
            there’s a spot for everyone at Fully Booked.
          </p>
        </div>

        <div className="spaces-gallery">
          <img src={libraryPic1} alt="" className="space-img"/>
          <img src={libraryPic2} alt="" className="space-img"/>
          <img src={libraryPic3} alt="" className="space-img"/>
        </div>
      </div>
    </section>
  );
}

export default Spaces;