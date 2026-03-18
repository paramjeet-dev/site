import React, { useState, useEffect } from 'react';
import SectionTitle from 'SectionTitle';

const RecruitersSlider = ({ recruiters = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const defaultRecruiters = [
    { id: 1, name: 'Microsoft' },
    { id: 2, name: 'Google' },
    { id: 3, name: 'Amazon' },
    { id: 4, name: 'TCS' },
    { id: 5, name: 'Infosys' },
    { id: 6, name: 'Wipro' },
    { id: 7, name: 'IBM' },
    { id: 8, name: 'Intel' },
    { id: 9, name: 'Deloitte' },
    { id: 10, name: 'L&T Infotech' },
    { id: 11, name: 'Cognizant' },
    { id: 12, name: 'Accenture' },
    { id: 13, name: 'Capgemini' },
    { id: 14, name: 'HCL Technologies' },
    { id: 15, name: 'Tech Mahindra' },
    { id: 16, name: 'Oracle' },
    { id: 17, name: 'Cisco' },
    { id: 18, name: 'SAP' },
    { id: 19, name: 'Adobe' },
    { id: 20, name: 'NVIDIA' },
    { id: 21, name: 'Texas Instruments' },
    { id: 22, name: 'Samsung' },
    { id: 23, name: 'LG' },
    { id: 24, name: 'Bosch' },
    { id: 25, name: 'Siemens' },
    { id: 26, name: 'Schneider Electric' },
    { id: 27, name: 'ABB' },
    { id: 28, name: 'Maruti Suzuki' },
    { id: 29, name: 'Tata Motors' },
    { id: 30, name: 'Mahindra & Mahindra' },
    { id: 31, name: 'Hero MotoCorp' },
    { id: 32, name: 'Bajaj Auto' },
    { id: 33, name: 'L&T Construction' },
    { id: 34, name: 'Gammon India' },
    { id: 35, name: 'Shapoorji Pallonji' },
    { id: 36, name: 'Reliance Industries' },
    { id: 37, name: 'BPCL' },
    { id: 38, name: 'HPCL' },
    { id: 39, name: 'IOCL' },
    { id: 40, name: 'GAIL' },
    { id: 41, name: 'NTPC' },
    { id: 42, name: 'Power Grid' },
    { id: 43, name: 'BHEL' },
    { id: 44, name: 'ISRO' },
    { id: 45, name: 'DRDO' },
    { id: 46, name: 'BARC' },
    { id: 47, name: 'HAL' },
    { id: 48, name: 'BEL' },
    { id: 49, name: 'NFL' },
    { id: 50, name: 'IFFCO' }
  ];

  const displayRecruiters = recruiters.length > 0 ? recruiters : defaultRecruiters;

  // Auto-scroll
  useEffect(() => {
    if (displayRecruiters.length <= 6 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayRecruiters.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [displayRecruiters.length, isPaused]);

  // Get visible recruiters (circular)
  const getVisibleRecruiters = () => {
    const visible = [];
    for (let i = 0; i < 6; i++) {
      const index = (currentIndex + i) % displayRecruiters.length;
      visible.push(displayRecruiters[index]);
    }
    return visible;
  };

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const totalPages = Math.ceil(displayRecruiters.length / 6);
  const currentPage = Math.floor(currentIndex / 6);

  return (
    <section id="recruiters" className="py-12 bg-primary-navy text-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Our Proud Partners"
          title="Top Recruiters"
          centered
          className="[&>p]:text-accent-gold [&>h2]:text-white"
        />

        <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
          Our students are recruited by leading companies across various industries. 
          We maintain strong industry partnerships to ensure excellent placement opportunities.
        </p>

        {/* Recruiters Grid */}
        <div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {getVisibleRecruiters().map((recruiter, index) => (
            <div
              key={`${recruiter.id}-${index}`}
              className="bg-white rounded-lg p-4 flex items-center justify-center hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
              style={{ minHeight: '80px' }}
            >
              <span className="text-primary-navy font-bold text-center text-sm sm:text-base">
                {recruiter.name}
              </span>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        {displayRecruiters.length > 6 && (
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index * 6)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? 'w-6 bg-accent-gold'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecruitersSlider;