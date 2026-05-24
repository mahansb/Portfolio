import React, { useEffect } from "react";

const MobileMenu = ({ isOpen, onClose, links, theme, onToggleTheme }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <ul
        className={`fixed top-0 right-0 w-[75%] md:hidden h-screen rounded-l-lg border-[3px]
        border-border bg-navBar-dark/95 backdrop-blur-md flex flex-col pt-24 px-5 space-y-5
        transform transition-all duration-500 z-45 shadow-xl
        ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={onClose}
              className="inline-block w-full text-center text-text
                border border-text/40 hover:bg-border hover:text-text-secondary rounded-lg px-4 py-3
                transition-all duration-300 shadow-sm"
            >
              {link.label}
            </a>
          </li>
        ))}

        <button
          onClick={onToggleTheme}
          className="flex items-center justify-center px-4 py-3 rounded-lg border border-text/40 shadow-md hover:scale-110 transition-all duration-300"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        {/* <button className="flex-1 h-10 rounded-lg bg-color-white shadow-md hover:scale-110 transition-all duration-300">
            🌐
          </button> */}
      </ul>
    </>
  );
};

export default MobileMenu;
