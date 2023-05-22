import React, { useState, useEffect } from 'react';

const Carousel = ({ images, interval }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images.length, interval]);

  return (
    <div className="carousel">
      <img src={images[currentImageIndex]} alt="Carousel Image" />
    </div>
  );
};

export default Carousel;
