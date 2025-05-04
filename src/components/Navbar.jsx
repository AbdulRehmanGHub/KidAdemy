import { useState } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

import logo from "../assets/kids1.webp";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "home" },
    { name: "Popular", path: "PopularSection" },
    { name: "Learn", path: "learning" },
    { name: "Pricing", path: "pricing" },
    { name: "Activities", path: "activities" },
    { name: "Universe", path: "universe" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-slate-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <RouterLink
            to="/"
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-500 rounded-full flex items-center justify-center text-white">
              <img src={logo} alt="logo" />
            </div>
            <span className="text-2xl font-bold text-slate-600">
              KidAdemy
            </span>
          </RouterLink>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                smooth
                duration={500}
                key={link.name}
                to={link.path}
                className="text-slate-600 cursor-pointer hover:text-slate-800 px-3 py-2 rounded-lg transition-colors relative
                         after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
                         after:bg-slate-500 hover:after:w-full after:transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 cursor-pointer rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
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
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                smooth
                duration={500}
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block cursor-pointer px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
