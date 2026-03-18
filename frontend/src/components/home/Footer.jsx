import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiArrowRight, FiPrinter } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerData = {
    about: {
      title: 'SIET Nilokheri',
      description:
        'State Institute Of Engineering & Technology, Nilokheri (Karnal) - A premier institute committed to excellence in technical education and holistic development of students.',
    },
    importantLinks: [
      { label: 'Govt. Of Haryana', href: 'https://haryana.gov.in/', external: true },
      { label: 'Kurukshetra University', href: 'https://www.kuk.ac.in/', external: true },
      { label: 'NIT, Kurukshetra', href: 'https://www.nitkkr.ac.in/', external: true },
      { label: 'NITTTR, Chandigarh', href: 'https://www.nitttrchd.ac.in/', external: true },
      { label: 'HSTES', href: 'http://hstes.org.in/', external: true },
      { label: 'Technical Education, Haryana', href: 'https://techeduhry.gov.in/', external: true },
    ],
    usefulInfo: [
      { label: 'Home', href: '/', isRoute: true },
      { label: 'About Us', href: '/history', isRoute: true },
      { label: 'Courses', href: '/courses-offered', isRoute: true },
      { label: 'Contact Us', href: '/contact', isRoute: true },
    ],
    contact: {
      institute: 'State Institute Of Engineering & Technology',
      location: 'Nilokheri (Karnal)',
      address: 'Nilokheri, Karnal, Haryana - 132117',
      phone: '01745-247003',
      examPhone: '01745-247002',
      fax: '01745-247003',
      email: 'directorgecnilokheri@gmail.com',
    },
    socialLinks: [
      { icon: FaFacebookF, url: '#', label: 'Facebook' },
      { icon: FaTwitter, url: '#', label: 'Twitter' },
      { icon: FaLinkedinIn, url: '#', label: 'LinkedIn' },
      { icon: FaInstagram, url: '#', label: 'Instagram' },
      { icon: FaYoutube, url: '#', label: 'YouTube' },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-[#0F1E3A] to-[#0a1426] text-white border-t-4 border-[#E6B325]">
      {/* Main Footer Content */}
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* About Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#E6B325] via-[#ffcc33] to-[#E6B325] bg-clip-text text-transparent">
              {footerData.about.title}
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              {footerData.about.description}
            </p>
            <div className="flex gap-2 sm:gap-3">
              {footerData.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="bg-white bg-opacity-10 hover:bg-[#E6B325] hover:text-[#0F1E3A] p-2 sm:p-2.5 rounded-lg transition-all duration-200"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="text-base sm:text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#E6B325]">
              Important Links
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerData.importantLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#E6B325] transition-colors text-xs sm:text-sm flex items-center gap-2 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#E6B325]">
              Useful Info
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerData.usefulInfo.map((link, index) => (
                <li key={index}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-[#E6B325] transition-colors text-xs sm:text-sm flex items-center gap-2 group"
                    >
                      <FiArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-[#E6B325] transition-colors text-xs sm:text-sm flex items-center gap-2 group"
                    >
                      <FiArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#E6B325]">Contact Us</h3>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-white font-semibold text-sm sm:text-base">
                {footerData.contact.institute}
              </p>
              <p className="text-[#E6B325] text-xs sm:text-sm font-medium">
                {footerData.contact.location}
              </p>
              <p className="flex items-start gap-2 sm:gap-3 text-gray-300 text-xs sm:text-sm">
                <FiMapPin className="text-[#E6B325] mt-1 flex-shrink-0" />
                <span>{footerData.contact.address}</span>
              </p>
              <div className="space-y-1.5 sm:space-y-2">
                <p className="flex items-center gap-2 sm:gap-3 text-gray-300 text-xs sm:text-sm">
                  <FiPhone className="text-[#E6B325] flex-shrink-0" />
                  <span>
                    <span className="text-gray-400">Phone:</span>{' '}
                    <a
                      href={`tel:${footerData.contact.phone}`}
                      className="hover:text-[#E6B325] transition-colors"
                    >
                      {footerData.contact.phone}
                    </a>
                  </span>
                </p>
                <p className="flex items-center gap-2 sm:gap-3 text-gray-300 text-xs sm:text-sm">
                  <FiPhone className="text-[#E6B325] flex-shrink-0" />
                  <span>
                    <span className="text-gray-400">Exam Branch:</span>{' '}
                    <a
                      href={`tel:${footerData.contact.examPhone}`}
                      className="hover:text-[#E6B325] transition-colors"
                    >
                      {footerData.contact.examPhone}
                    </a>
                  </span>
                </p>
                <p className="flex items-center gap-2 sm:gap-3 text-gray-300 text-xs sm:text-sm">
                  <FiPrinter className="text-[#E6B325] flex-shrink-0" />
                  <span>
                    <span className="text-gray-400">Fax:</span> {footerData.contact.fax}
                  </span>
                </p>
                <p className="flex items-center gap-2 sm:gap-3 text-gray-300 text-xs sm:text-sm">
                  <FiMail className="text-[#E6B325] flex-shrink-0" />
                  <a
                    href={`mailto:${footerData.contact.email}`}
                    className="hover:text-[#E6B325] transition-colors break-all"
                  >
                    {footerData.contact.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white border-opacity-10">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
            <p>
              © Copyright {currentYear} SIET Nilokheri. All Rights Reserved
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
              <a href="/privacy-policy" className="hover:text-[#E6B325] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-conditions" className="hover:text-[#E6B325] transition-colors">
                Terms & Conditions
              </a>
              <a href="/sitemap" className="hover:text-[#E6B325] transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

