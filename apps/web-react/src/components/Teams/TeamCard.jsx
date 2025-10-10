import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const TeamCard = ({ name, handle, imageUrl, role, socialLinks }) => {
  const socialIconClass = "flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-orange-500 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-90";

  return (
    <div className="group relative w-full max-w-[350px] cursor-pointer overflow-hidden rounded-[20px] bg-[#f5f5f0] shadow-[0_10px_30px_rgba(0,0,0,0.2)] ring-1 ring-white/10 transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-[15px] hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(0,0,0,0.3),_0_0_30px_rgba(255,102,0,0.2),_0_0_60px_rgba(255,136,0,0.1)]">
      
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-orange-500/5 via-orange-500/10 to-orange-500/5 opacity-0 transition-opacity duration-400 group-hover:opacity-100"></div>

      <div className="relative flex h-[220px] items-center justify-center bg-[#E57A4B]">
        <div className="absolute top-1/2 left-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-[#f5f5f0] z-20">
          <img
            src={imageUrl}
            alt={name}
            className="card-image h-full w-full object-cover transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
      
      <div className="relative bg-[#f5f5f0] px-6 pt-[60px] pb-6 text-center z-30">
        
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#ff6600] via-[#ffaa00] to-[#00aaff] opacity-30"></div>

        <h3 className="font-inter mb-1 text-[1.4rem] font-bold uppercase tracking-wider text-gray-800 transition-colors duration-300 group-hover:text-[#ff6600] group-hover:[text-shadow:0_2px_4px_rgba(255,102,0,0.3)]">
          {name}
        </h3>
        
        <p className="mb-2 text-sm font-normal text-gray-500">{handle}</p>

        <p className="mb-5 text-md font-bold text-gray-800">{role}</p>

        <div className="mb-5 flex justify-center gap-6">
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={socialIconClass}  >
            <FaLinkedin />
          </a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className={socialIconClass} >
            <FaInstagram />
          </a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className={socialIconClass}  >
            <FaGithub />
          </a>
        </div>

      </div>
    </div>
  );
};

export default TeamCard;