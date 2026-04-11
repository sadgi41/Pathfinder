import React from 'react'

const RoadmapTimeline = ({roadmap}) => {
     if (!Array.isArray(roadmap)) {
    return <p className="text-gray-500">Loading roadmap...</p>;
  }
   return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">
        {roadmap.length} steps to complete
      </p>
      {roadmap.map(step => (
        <div
          key={step.week}
          className="p-4 rounded-lg border border-gray-300 dark:border-gray-700"
        >
          <p className="text-sm text-gray-500">Week {step.week}</p>
          <h3 className="text-lg font-semibold">{step.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default RoadmapTimeline
