import React from 'react'
import { Link } from 'react-router-dom';
import ThemeToggle from '../common/ThemeToggle';

const Navbar = () => {
  return (
       <nav className="border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Pathfinder
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/roles" className="hover:underline">
            Roles
          </Link>
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
