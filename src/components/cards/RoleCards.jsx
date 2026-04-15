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
      <h3 className="text-lg font-semibold tracking-tight">{role.title}</h3>
      <p className="text-sm text-gray-500">{role.level}</p>

      <div className="mt-2 flex flex-wrap gap-2">
        {role.skills.map((skill, index) => (
          <span
            key={skill.name + index}
            className="p-5 text-sm rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            {skill.name} ({skill.level})
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default RoleCards
