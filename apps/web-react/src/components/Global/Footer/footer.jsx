import React from 'react';
// Icons are no longer used in the final output.
// import { FaLinkedinIn, FaInstagram, FaDiscord } from 'react-icons/fa';
// import { RiTwitterXFill } from 'react-icons/ri';
import footerBg from './new_logo.png'; 
import techspardhaLogo from './techspardha_logo.svg'; 
const Footer = () => {
  const accentColor = '#E47D05';
  const lineStyle = {
    height: '3px',
    borderRadius: '3px',
    background: `linear-gradient(to right, transparent, ${accentColor})`,
    boxShadow: `0 0 8px ${accentColor}90, 0 0 4px ${accentColor}`,
  };
  return (
    <footer 
      className="relative bg-black font-sans flex flex-col items-center justify-end pt-8 px-8 pb-12 overflow-hidden"
      style={{ 
        minHeight: '350px',
        backgroundImage: `url(${footerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Main content container */}
      <div className="z-10 flex flex-col items-center w-full max-w-4xl">

        {/* Logo */}
        <div className="relative text-center mb-1">
          <img 
            src={techspardhaLogo} 
            alt="Techspardha Logo" 
            className="mx-auto" 
            style={{ height: '280px', width: 'auto' }}
          />
        </div>
        {/*  Credit line with responsive 3D lines */}
        <div className="w-full max-w-sm my-6 flex items-center gap-3">
          {/* Left Line */}
          <div 
            className="flex-1" // flex-1 allows the line to grow and shrink
            style={lineStyle}
          ></div>
          {/* Credit Text */}
          <p className="text-gray-400 text-base font-semibold flex-shrink-0"> {/* Font size increased */}
            Developed with ❤️ by Technobyte
          </p>
          {/* Right Line */}
          <div
            className="flex-1"
            style={{
              ...lineStyle,
              background: `linear-gradient(to left, transparent, ${accentColor})`,
            }}
          ></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;