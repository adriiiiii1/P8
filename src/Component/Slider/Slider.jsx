import { useState } from 'react';
import PropTypes from 'prop-types';
import './Slider.css';
import arrowleft from '../../assets/arrow_left.png';
import arrowright from '../../assets/arrow_right.png';

function Slider({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      {images.length > 1 && (
        <>
          <img className="arrow arrow_left" src={arrowleft} alt="arrowleft" onClick={prevSlide} />
          <img className="arrow arrow_right" src={arrowright} alt="arrowright" onClick={nextSlide} />
          <div className="slider-number">
            {currentSlide + 1}/{images.length}
          </div>
        </>
      )
      }
      <img className="slider-img" src={images[currentSlide]} alt={`Slide ${currentSlide}`} />
    </div>
  );
}

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;