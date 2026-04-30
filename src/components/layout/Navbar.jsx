import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../common/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      
      <div className="max-w-7xl mx-auto px-4 py-4">

        {/* Top row */}
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Pathfinder
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/roles"
              className="hover:underline font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
            >
              Roles
            </Link>

            <Link
              to="/dashboard"
              className="hover:underline font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
            >
              Dashboard
            </Link>

            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-3">

            <Link
              to="/roles"
              onClick={() => setIsOpen(false)}
              className="font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
            >
              Roles
            </Link>

            <Link
              to="/dashboard"
              onClick={() => setIsOpen(false)}
              className="font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
            >
              Dashboard
            </Link>

            <ThemeToggle />
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;