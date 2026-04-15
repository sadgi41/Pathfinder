import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './Navbar';
import { motion } from "framer-motion";

function AppLayout() {
  return (
    <div className="min-h-screen text-black dark:text-white bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
       <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto px-4 py-6"
      >
        <Outlet />
      </motion.main>
    </div>
  );
}

export default AppLayout
