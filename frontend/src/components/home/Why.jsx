import React from 'react';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import { 
  FiAward, 
  FiUsers, 
  FiBookOpen, 
  FiTrendingUp,
  FiGlobe,
  FiCpu
} from 'react-icons/fi';

const WhyChooseUs = () => {
  const features = [
    {
      icon: FiAward,
      title: 'AICTE & NBA Accredited',
      description: 'All programs are approved by AICTE and accredited by NBA, ensuring quality education.',
    },
    {
      icon: FiUsers,
      title: 'Experienced Faculty',
      description: 'Learn from highly qualified faculty with industry experience and research expertise.',
    },
    {
      icon: FiBookOpen,
      title: 'Industry-Aligned Curriculum',
      description: 'Updated curriculum designed with industry inputs to meet current market demands.',
    },
    {
      icon: FiTrendingUp,
      title: 'Excellent Placements',
      description: 'Consistent track record of 95%+ placements with top companies across sectors.',
    },
    {
      icon: FiGlobe,
      title: 'Global Exposure',
      description: 'International collaborations, exchange programs, and global internship opportunities.',
    },
    {
      icon: FiCpu,
      title: 'State-of-the-Art Labs',
      description: 'Modern laboratories equipped with latest technology and tools for hands-on learning.',
    },
  ];

  const facilities = [
    'Central Library with 50,000+ Books',
    'High-Speed Internet & Wi-Fi Campus',
    'Separate Hostels for Boys & Girls',
    'Sports Complex & Gymnasium',
    'Cafeteria & Food Court',
    'Transportation Facility',
    'Medical Center',
    'Auditorium & Seminar Halls',
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <SectionTitle 
          subtitle="Why SIET"
          title="Why Choose Us"
          centered
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index}>
              <div className="bg-gradient-to-br from-[#2E9E6F]/10 to-[#E6B325]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <feature.icon className="text-3xl text-[#2E9E6F]" />
              </div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#0F1E3A] to-[#2E9E6F] bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-text-muted text-sm">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Facilities */}
        <Card className="bg-gradient-to-br from-primary-navy to-primary-navy/90 text-white max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-center text-accent-gold">
            World-Class Facilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-accent-gold w-2 h-2 rounded-full flex-shrink-0"></div>
                <span className="text-gray-100">{facility}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default WhyChooseUs;
