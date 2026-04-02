import React from 'react'
import { motion } from "framer-motion";

const RoleCards = ({ role, selected, onSelect }) => {
  return (
     <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className={`cursor-pointer rounded-xl border p-4 transition
        ${selected 
          ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" 
          : "border-gray-300 dark:border-gray-700 hover:border-blue-400"}
      `}
      >
      <h3 className="text-lg font-semibold">{role.title}</h3>
      <p className="text-sm text-gray-500">{role.level}</p>

      <div className="mt-2 flex flex-wrap gap-2">
        {role.skills.slice(0,4).map((skill) => (
          <span
            key={skill}
            className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default RoleCards
