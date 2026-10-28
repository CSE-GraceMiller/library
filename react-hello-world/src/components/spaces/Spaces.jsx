import "./Spaces.css";
import { useState } from "react";

import libraryPic1 from "./images/library-pic-1.png";
import libraryPic2 from "./images/library-pic-2.png";
import libraryPic3 from "./images/library-pic-3.png";

function Spaces() {
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [libraryPic1, libraryPic2, libraryPic3];

  const slideForward = () => {
    setSlideIndex(slideIndex === images.length - 1 ? 0 : slideIndex + 1);
  };

  const slideBackward = () => {
    setSlideIndex(slideIndex === 0 ? images.length - 1 : slideIndex - 1);
  };

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
          <div className="slideshow-container">
            <img src={images[slideIndex]} alt="Library space" className="space-img"/>

            <button className="slide-btn prev" onClick={slideBackward} aria-label="Previous image">
              ‹
            </button>

            <button className="slide-btn next" onClick={slideForward} aria-label="Next image">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Spaces;