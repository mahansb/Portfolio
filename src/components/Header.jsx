import React, { useState, useCallback } from "react";
import { useTheme } from "../hooks/useTheme";
import MobileMenu from "./MobileMenu";
import profileImg from "../assets/images/img2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#project", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="flex justify-center items-center w-full h-37.5 bg-transparent">
      <nav className="flex items-center justify-between w-[85%] md:w-[90%] py-3 rounded-3xl border-border border-[3px] bg-navBar/60 shadow-lg z-40">
        <div className="pl-6 flex-1">
          <img
            src={profileImg}
            alt="Profile"
            className="w-17 h-17 hover:scale-110 transition-transform duration-300 cursor-pointer
                      bg-color-white rounded-2xl object-cover border-2 border-border shadow-md"
          />
        </div>

        <ul className="hidden md:flex justify-center items-center flex-1 text-text text-lg">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 rounded-lg hover:text-color-white hover:bg-hover duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end pr-6 space-x-4 flex-1">
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="w-16 h-10 rounded-lg bg-color-white shadow-md hover:scale-110 transition-all duration-300"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            {/* <button className="w-16 h-10 rounded-lg bg-color-white shadow-md hover:scale-110 transition-all duration-300">
              🌐
            </button> */}
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-between mr-6 w-5 h-5 z-50 transform transition-transform duration-300"
        >
          <span
            className={`block h-0.5 w-full bg-border-dark rounded transform transition duration-300 origin-center
            ${isMenuOpen ? "rotate-45 translate-y-3" : ""}`}
          />
          <span
            className={`block h-0.5 w-full bg-border-dark rounded transform transition duration-300 origin-center
            ${isMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-full bg-border-dark rounded transform transition duration-300 origin-center
            ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          />
        </button>
      </nav>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        links={navLinks}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    </header>
  );
};

export default Header;
