import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const TopBar = () => {
  const contactInfo = {
    phone: '01745-247003',
    email: 'directorgecnilokheri@gmail.com',
  };

  const socialLinks = [
    { icon: FaFacebookF, url: 'https://www.facebook.com/profile.php?id=61586207684416', label: 'Facebook' },
    { icon: FaTwitter, url: 'https://x.com/siet_nilokheri', label: 'Twitter' },
    { icon: FaLinkedinIn, url: 'https://gecnilokheri.ac.in/www.linkedin.com/in/siet-nilokheri-b450753a6', label: 'LinkedIn' },
    { icon: FaInstagram, url: 'https://www.instagram.com/s.i.e.t_nlk/', label: 'Instagram' },
  ];

  return (
    <div className="bg-gradient-to-r from-[#0F1E3A] via-[#0F1E3A]/95 to-[#0F1E3A] text-white py-2.5 hidden md:block border-b border-[#E6B325]/20">
      <div className="container-custom">
        <div className="flex justify-between items-center text-sm">
          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${contactInfo.phone}`} 
              className="flex items-center gap-2 hover:text-accent-gold transition-colors"
              aria-label="Call us"
            >
              <FiPhone className="text-base" />
              <span>{contactInfo.phone}</span>
            </a>
            <a 
              href={`mailto:${contactInfo.email}`} 
              className="flex items-center gap-2 hover:text-accent-gold transition-colors"
              aria-label="Email us"
            >
              <FiMail className="text-base" />
              <span>{contactInfo.email}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-text-muted mr-2">Follow Us:</span>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="hover:text-accent-gold transition-colors"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="text-base" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
