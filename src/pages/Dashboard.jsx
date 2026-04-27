import { useLocation } from "react-router-dom";
import { compareSkills, calculateReadiness } from "../utils/skillUtils";
import { generateRoadmap } from "../utils/roadmapUtils";

import StatsCard from "../components/dashboard/StatsCard";
import MissingSkills from "../components/dashboard/MissingSkills";
import ProgressChart from "../components/dashboard/ProgressChart";
import { usePathfinderStore } from "../store/usePathfinderStore";


const Dashboard = () => {
  const location = useLocation();
  // const state = location.state;

  const currentRole = usePathfinderStore(
    (state) => state.currentRole
  );

  const targetRole = usePathfinderStore(
    (state) => state.targetRole
  );

  const completedSkills = usePathfinderStore(
    (state) => state.completedSkills
  );

  if (!currentRole || !targetRole) {
    return <p>Please select roles first.</p>;
  }


  // const { currentRole, targetRole } = state;

  const skillMatrix = compareSkills(
    currentRole?.skills || [],
    targetRole?.skills || []
  ).map((skill) => ({
    ...skill,
    isCompleted: completedSkills.includes(skill.name)
  }));

  const readiness = calculateReadiness(skillMatrix);

  const missingSkills = skillMatrix.filter(
    skill => !skill.isCompleted
  );

  const roadmap = generateRoadmap(skillMatrix);


  const completedCount =
    skillMatrix.filter(s => s.isCompleted).length;

  const chartData = [
    { week: "Start", progress: 0 },
    {
      week: "Now",
      progress: Math.round(
        (completedCount / skillMatrix.length) * 100
      )
    }
  ];


  if (missingSkills.length === 0) {
    return (
      <p className="text-green-500 font-medium">
        🎉 You are fully ready!
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-1 gap-6">
      <StatsCard readiness={readiness} />

      <ProgressChart data={chartData} />

      <MissingSkills skills={missingSkills} />

    </div>
  );
}

export default Dashboard
