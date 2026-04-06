import React from 'react'
import { useLocation , useNavigate } from "react-router-dom";
import { compareSkills } from "../utils/skillUtils";
import { generateRoadmap } from "../utils/roadmapUtils";
import RoadmapTimeline from "../components/roadmap/RoadmapTimeline";
import { usePathfinderStore } from "../store/usePathfinderStore";

const Roadmap = () => {
 const location = useLocation();
  // const state = location.state;
  const navigate = useNavigate();

  const { currentRole, targetRole } = usePathfinderStore();


  if (!currentRole || !targetRole) {
    return <p>Please select roles first.</p>;
  }

  // const { currentRole, targetRole } = state;

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
       <button
    onClick={() =>
       navigate("/dashboard") 
    }
    className="px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition duration-200"
  >
    View Dashboard
  </button>

    </div>

  );
}

export default Roadmap
