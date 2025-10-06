// src/components/Home/navbar/navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/photos/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black flex items-center justify-center py-10">
      {/* Navbar container */}
      <div className="bg-[#2b2b28] text-white px-3 py-2 rounded-full flex items-center justify-between w-[55%] max-w-5xl shadow-[0_0_10px_2px_rgba(255,140,0,0.8)]">

        
        {/* Hamburger for mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav Links */}
        <div
          className={`flex-col md:flex-row md:flex md:items-center md:space-x-3 absolute md:static top-16 left-0 w-full md:w-auto bg-[#111] md:bg-transparent rounded-lg md:rounded-none transition-all duration-300 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <Link
            to="/events"
            className="block px-6 py-2 font-bold text-base hover:scale-110 hover:text-orange-400 transition-all duration-200"
          >
            Events
          </Link>
          <Link
            to="/teams"
            className="block px-6 py-2 font-bold text-base hover:scale-110 hover:text-orange-400 transition-all duration-200"
          >
            Team
          </Link>
          <Link
            to="/developer"
            className="block px-6 py-2 font-bold text-base hover:scale-110 hover:text-orange-400 transition-all duration-200"
          >
            Developers
          </Link>


          {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={logo}
              alt="Techspardha Logo" 
              className="h-9 w-auto scale-150 transition-transform duration-200"
            />
          </Link>
        </div>
        
          <Link
            to="/guests"
            className="block px-6 py-2 font-bold text-base hover:scale-110 hover:text-orange-400 transition-all duration-200"
          >
            Lectures
          </Link>
          <Link
            to="/sponsors"
            className="block px-6 py-2 font-bold text-base hover:scale-110 hover:text-orange-400 transition-all duration-200"
          >
            Sponsors
          </Link>
          <Link
            to="/about"
            className="block px-6 py-2 font-bold text-base hover:scale-110 hover:text-orange-400 transition-all duration-200"
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
}