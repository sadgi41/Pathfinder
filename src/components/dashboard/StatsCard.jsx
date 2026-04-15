import React from 'react'

const StatsCard = ({readiness}) => {
  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-300 dark:border-gray-700">
      <h3 className="text-lg font-semibold tracking-tight mb-2">
        Readiness Score
      </h3>

      <p className="text-4xl font-bold text-blue-600">
        {readiness}%
      </p>

      <p className="text-sm text-gray-500 mt-2">
        Based on your current skill set
      </p>
      <div className="space-y-8"></div>
    </div>
  )
}

export default StatsCard
