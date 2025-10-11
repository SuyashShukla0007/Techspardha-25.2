// src/components/Home/navbar/navbar.jsx
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import logo from "../../../assets/photos/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    // run once to set initial state
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={` top-0 py-5 bg-black z-[999] transition-all duration-300 flex items-center justify-center ${
        isScrolled ? "translate-y-2" : "translate-y-0"
      }`}
      aria-hidden={false}
    >
      {/* Navbar container */}
      <div
        className={` sticky top-0  text-white px-3 py-2 rounded-full flex items-center justify-between w-[95%] md:w-[55%] max-w-5xl shadow-[0_0_10px_2px_rgba(255,140,0,0.8)] ${
          isScrolled ? "bg-black/40 backdrop-blur-sm" : "bg-[#2b2b28]"
        }`}
      >
        {/* Mobile hamburger (left) - visible only on small screens */}
        <div className="md:hidden z-[100]">
          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7 text-white"
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
        </div>

        {/* Mobile-only overlay menu (covers top on open) */}
        {typeof document !== "undefined" &&
          ReactDOM.createPortal(
            <div
              className={`flex-col fixed inset-x-0 top-0 w-full bg-[#111] py-6 transition-all duration-300 z-[9999] md:hidden ${
                isOpen ? "flex" : "hidden"
              }`}
            >
              {/* Close button on the top-right for the overlay */}
              <button
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 p-2 rounded-md focus:outline-none"
              >
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <Link
                to="/events"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 font-bold text-xl text-left text-white hover:scale-110 hover:text-orange-400 transition-all duration-200 w-full"
              >
                Events
              </Link>
              <Link
                to="/teams"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 font-bold text-xl text-left text-white hover:scale-110 hover:text-orange-400 transition-all duration-200 w-full"
              >
                Team
              </Link>
              <Link
                to="/developer"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 font-bold text-xl text-left text-white hover:scale-110 hover:text-orange-400 transition-all duration-200 w-full"
              >
                Developers
              </Link>
              <Link
                to="/guests"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 font-bold text-xl text-left text-white hover:scale-110 hover:text-orange-400 transition-all duration-200 w-full"
              >
                Lectures
              </Link>
              <Link
                to="/sponsors"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 font-bold text-xl text-left text-white hover:scale-110 hover:text-orange-400 transition-all duration-200 w-full"
              >
                Sponsors
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 font-bold text-xl text-left text-white hover:scale-110 hover:text-orange-400 transition-all duration-200 w-full"
              >
                About Us
              </Link>
            </div>,
            document.body
          )}

        {/* Desktop nav: left links, centered logo, right links (visible md+) */}
        <div className="hidden md:flex md:items-center md:justify-evenly md:w-full">
          <div className="flex items-center space-x-3">
            <Link
              to="/events"
              className="px-4 py-2 font-bold text-base hover:text-orange-400"
            >
              Events
            </Link>
            <Link
              to="/teams"
              className="px-4 py-2 font-bold text-base hover:text-orange-400"
            >
              Team
            </Link>
            <Link
              to="/developer"
              className="px-4 py-2 font-bold text-base hover:text-orange-400"
            >
              Developers
            </Link>
          </div>

          <Link to="/" className="mx-0">
            <img src={logo} alt="Techspardha Logo" className="h-12 w-auto" />
          </Link>

          <div className="flex items-center space-x-3">
            <Link
              to="/guests"
              className="px-4 py-2 font-bold text-base hover:text-orange-400"
            >
              Lectures
            </Link>
            <Link
              to="/sponsors"
              className="px-4 py-2 font-bold text-base hover:text-orange-400"
            >
              Sponsors
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 font-bold text-base hover:text-orange-400"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Mobile branding on the right (visible only on small screens) */}
        <Link to="/" className="md:hidden flex items-center space-x-2">
          <span className="text-white font-bold text-lg">
            Techspardha <span className="text-orange-400">25</span>
          </span>
          <img src={logo} alt="Techspardha Logo" className="h-8 w-auto" />
        </Link>
      </div>
    </nav>
  );
}
