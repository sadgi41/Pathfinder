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

const currentRole = usePathfinderStore((state) => state.currentRole);
const targetRole = usePathfinderStore((state) => state.targetRole);
const completedSkills = usePathfinderStore((state) => state.completedSkills);

  if (!currentRole || !targetRole) {
    return <p>Please select roles first.</p>;
  }

  // const { currentRole, targetRole } = state;

const skillMatrix = compareSkills(
  currentRole?.skills || [],
  targetRole?.skills || []
).map((skill) => ({
  ...skill,
  isCompleted: completedSkills.includes(skill.name),
}));

console.log(skillMatrix);

const roadmap = generateRoadmap(skillMatrix);

console.log("roadmap:", roadmap);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">
        Your Learning Roadmap
      </h2>

      <RoadmapTimeline roadmap={roadmap} />
       <button
    onClick={() =>
       navigate("/dashboard") 
    }
    className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
  >
    View Dashboard
  </button>

    </div>

  );
}

export default Roadmap
