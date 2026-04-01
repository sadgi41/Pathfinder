import React from 'react'
import { useLocation } from "react-router-dom";
import { compareSkills } from "../utils/skillUtils";
import { generateRoadmap } from "../utils/roadmapUtils";
import RoadmapTimeline from "../components/roadmap/RoadmapTimeline";

const Roadmap = () => {
 const location = useLocation();
  const state = location.state;

  if (!state || !state.currentRole || !state.targetRole) {
    return <p>Please select roles first.</p>;
  }

  const { currentRole, targetRole } = state;

  const skillMatrix = compareSkills(
    currentRole.skills,
    targetRole.skills
  );

  const roadmap = generateRoadmap(skillMatrix);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">
        Your Learning Roadmap
      </h2>

      <RoadmapTimeline roadmap={roadmap} />
    </div>
  );
}

export default Roadmap
