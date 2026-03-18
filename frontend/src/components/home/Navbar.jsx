import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiChevronDown } from 'react-icons/fi';

const Navbar = ({ onMenuClick }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [clickedDropdown, setClickedDropdown] = useState(null);

  const navigationLinks = [
    { label: 'Home', href: '/', isRoute: true },
    {
      label: 'About Us',
      href: '#about',
      dropdown: [
        { label: 'History', href: '/history', isRoute: true },
        { label: 'Affiliation', href: '/affiliation', isRoute: true },
        { label: 'Staff', href: '/staff', isRoute: true },
        { label: 'Admission Status', href: '/admission-status', isRoute: true },
        { label: 'Facilities', href: '/facilities', isRoute: true },
        { label: 'Courses Offered', href: '/courses-offered', isRoute: true },
        { label: 'Results', href: '#results' },
        { label: 'Placements', href: '/placements', isRoute: true },
        { label: 'Extracurricular Activities', href: '#extracurricular' },
        { label: 'Contact Us', href: '/contact', isRoute: true },
        { label: 'How To Reach Institute', href: '/how-to-reach', isRoute: true },
      ],
    },
    {
      label: 'Students',
      href: '#students',
      dropdown: [
        { label: 'Academic Calendar', href: '#academic-calendar' },
        { label: 'Exams', href: '#exams' },
        { label: 'Syllabus', href: '#syllabus' },
        { label: 'Apprenticeship', href: '#apprenticeship' },
        { label: 'Time Table', href: '#time-table' },
        { label: 'Online Learning Portals', href: '#online-learning' },
        { label: 'Code of Conduct', href: '#student-conduct' },
        { label: 'Student Helpline', href: '#student-helpline' },
        { label: 'e-Service for Students', href: '#e-service-students' },
      ],
    },
    {
      label: 'Faculty',
      href: '#faculty',
      dropdown: [
        { label: 'Teaching Staff', href: '/staff', isRoute: true },
        { label: 'Code Of Conduct', href: '/faculty/code-of-conduct', isRoute: true },
        { label: 'Training Policy', href: '/faculty/training-policy', isRoute: true },
        { label: 'Service Rules', href: '/faculty/service-rules', isRoute: true },
        { label: 'Research Papers', href: '/faculty/research-papers', isRoute: true },
        { label: 'Department Instructions', href: '/faculty/department-instructions', isRoute: true },
        { label: 'HRMS', href: '/faculty/hrms', isRoute: true },
        { label: 'E-Service for Faculty', href: '/faculty/e-service', isRoute: true },
      ],
    },
    {
      label: 'Departments',
      href: '#departments',
      dropdown: [
        { label: 'Applied Science', href: '/departments/applied-science', isRoute: true },
        { label: 'Civil Engineering', href: '/departments/civil-engineering', isRoute: true },
        { label: 'Computer Engineering', href: '/departments/computer-engineering', isRoute: true },
        { label: 'Computer Science (AI & ML)', href: '/departments/aiml', isRoute: true },
        { label: 'Electronics & Communication', href: '/departments/electronics-communication', isRoute: true },
        { label: 'Electrical Engineering', href: '/departments/electrical-engineering', isRoute: true },
        { label: 'Mechanical Engineering', href: '/departments/mechanical-engineering', isRoute: true },
      ],
    },
    {
      label: 'Achievements',
      href: '#achievements'
    },
    {
      label: 'Placements',
      href: '/placements',
      isRoute: true
    },
    {
      label: 'Gallery',
      href: '#gallery'
    },
    {
      label: 'News & Notices',
      href: '#news-notices'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown !== null && !event.target.closest('nav')) {
        setActiveDropdown(null);
        setClickedDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

  return (
    <nav
      className={`backdrop-blur-md bg-[#0F1E3A]/90 border-b border-white/10 transition-all duration-300 ${
        isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-2xl bg-[#0F1E3A]/95' : 'shadow-lg'
      }`}
      aria-label="Main Navigation"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="md:hidden text-white hover:text-[#E6B325] transition-colors p-2"
            aria-label="Open menu"
          >
            <FiMenu className="text-2xl" />
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1 w-full justify-center">
            {navigationLinks.map((link, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => {
                  if (link.dropdown && clickedDropdown !== index) {
                    setActiveDropdown(index);
                  }
                }}
                onMouseLeave={() => {
                  if (activeDropdown === index && clickedDropdown !== index) {
                    setActiveDropdown(null);
                  }
                }}
              >
                {link.dropdown ? (
                  // Button for items with dropdown
                  <button
                    onClick={() => {
                      const newState = activeDropdown === index ? null : index;
                      setActiveDropdown(newState);
                      setClickedDropdown(newState);
                    }}
                    className="flex items-center gap-1 px-3 py-2 text-xs lg:text-sm font-semibold text-white/95 hover:text-[#E6B325] transition-all duration-200 rounded-md hover:bg-white/10 backdrop-blur-sm whitespace-nowrap"
                  >
                    {link.label}
                    <FiChevronDown className={`text-sm transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                  </button>
                ) : link.isRoute ? (
                  <Link
                    to={link.href}
                    className="flex items-center gap-1 px-3 py-2 text-xs lg:text-sm font-semibold text-white/95 hover:text-[#E6B325] transition-all duration-200 rounded-md hover:bg-white/10 backdrop-blur-sm whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="flex items-center gap-1 px-3 py-2 text-xs lg:text-sm font-semibold text-white/95 hover:text-[#E6B325] transition-all duration-200 rounded-md hover:bg-white/10 backdrop-blur-sm whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                )}

                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === index && (
                  <div className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-md border border-[#E6B325]/20 rounded-xl shadow-2xl min-w-[240px] max-h-[400px] overflow-y-auto py-3 z-50">
                    {link.dropdown.map((item, idx) => (
                      item.isRoute ? (
                        <Link
                          key={idx}
                          to={item.href}
                          onClick={() => {
                            setActiveDropdown(null);
                            setClickedDropdown(null);
                          }}
                          className="block px-5 py-2.5 text-xs lg:text-sm font-semibold text-[#0F1E3A] hover:bg-gradient-to-r hover:from-[#E6B325]/10 hover:to-[#2E9E6F]/10 hover:text-[#2E9E6F] transition-all border-l-3 border-transparent hover:border-[#E6B325] rounded-r-lg"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          key={idx}
                          href={item.href}
                          onClick={() => {
                            setActiveDropdown(null);
                            setClickedDropdown(null);
                          }}
                          className="block px-5 py-2.5 text-xs lg:text-sm font-semibold text-[#0F1E3A] hover:bg-gradient-to-r hover:from-[#E6B325]/10 hover:to-[#2E9E6F]/10 hover:text-[#2E9E6F] transition-all border-l-3 border-transparent hover:border-[#E6B325] rounded-r-lg"
                        >
                          {item.label}
                        </a>
                      )
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;