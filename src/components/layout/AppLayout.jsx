import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './Navbar';
import { motion } from "framer-motion";

function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
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
