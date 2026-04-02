import React from 'react'

const StatsCard = ({readiness}) => {
  return (
    <div className="p-6 rounded-xl border border-gray-300 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-2">
        Readiness Score
      </h3>

      <p className="text-4xl font-bold text-blue-600">
        {readiness}%
      </p>

      <p className="text-sm text-gray-500 mt-2">
        Based on your current skill set
      </p>
    </div>
  )
}

export default StatsCard
