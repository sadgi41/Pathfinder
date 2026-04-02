import React from 'react'
import { Link } from 'react-router-dom';
import ThemeToggle from '../common/ThemeToggle';

const Navbar = () => {
  return (
       <nav className="border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/"  className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Pathfinder
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/roles" className="hover:underline font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Roles
          </Link>
          <Link to="/dashboard" className="hover:underline font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Dashboard
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
