import "./Spaces.css";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import libraryPic1 from "./images/library-pic-1.png";
import libraryPic2 from "./images/library-pic-2.png";
import libraryPic3 from "./images/library-pic-3.png";

function Spaces() {
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [libraryPic1, libraryPic2, libraryPic3];

  const captions = [
    "Sunny reading nooks for quiet afternoons",
    "Creative spaces for makers and dreamers",
    "Friendly corners where everyone belongs",
  ];

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
            From sunny reading nooks to creative spaces and friendly faces, there’s a spot for everyone at Fully Booked.
          </p>
        </div>

        <div className="spaces-gallery">
          <div className="slideshow-container">
            <img src={images[slideIndex]} alt="" className="space-img"/>

            <button className="slide-btn prev" onClick={slideBackward} aria-label="Previous image">
              ‹
            </button>

            <button className="slide-btn next" onClick={slideForward} aria-label="Next image">
              ›
            </button>

            <button type="button" className="space-info-btn" data-tooltip-id="space-tooltip" data-tooltip-content={captions[slideIndex]} aria-label="Image info">
              i
            </button>
          </div>
        </div>
      </div>
      <Tooltip id="space-tooltip" place="top" className="space-tooltip"/>
    </section>
  );
}

export default Spaces;