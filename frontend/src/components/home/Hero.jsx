import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Hero = ({ images = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const defaultImages = [
    {
      url: 'https://gecnilokheri.ac.in/images/Fresher/Fresher6.JPG'
    },
    {
      url: 'https://gecnilokheri.ac.in/images/Sports26_9.jpg'
    },
    {
      url: 'https://gecnilokheri.ac.in/images/Fresher/Fresher2.JPG'
    },
    {
      url: 'https://gecnilokheri.ac.in/images/Fresher/Fresher3.JPG'
    }
  ];

  const displayImages = images.length > 0 ? images : defaultImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === displayImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [displayImages.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? displayImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === displayImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section
      id="home"
      className="relative h-[50vh] md:h-[65vh] w-full overflow-hidden"
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        {displayImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={`Campus view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay for readability (LIGHT + DARK) */}
      <div className="absolute inset-0 bg-white/30 dark:bg-black/40 z-10"></div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 z-20 
                   bg-white/30 dark:bg-black/30 
                   hover:bg-white/50 dark:hover:bg-black/50
                   text-black dark:text-white
                   p-2 md:p-3 rounded-full 
                   backdrop-blur-md
                   transition-all duration-300 hover:scale-110"
        aria-label="Previous image"
      >
        <FiChevronLeft className="text-xl md:text-2xl" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 z-20 
                   bg-white/30 dark:bg-black/30 
                   hover:bg-white/50 dark:hover:bg-black/50
                   text-black dark:text-white
                   p-2 md:p-3 rounded-full 
                   backdrop-blur-md
                   transition-all duration-300 hover:scale-110"
        aria-label="Next image"
      >
        <FiChevronRight className="text-xl md:text-2xl" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {displayImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'w-8 bg-[#E6B325]'
                : 'w-2 bg-black/40 dark:bg-white/50 hover:bg-black/70 dark:hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;