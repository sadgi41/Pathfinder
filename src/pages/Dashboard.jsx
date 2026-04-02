import { useLocation } from "react-router-dom";
import { compareSkills, calculateReadiness } from "../utils/skillUtils";
import { generateRoadmap } from "../utils/roadmapUtils";

import StatsCard from "../components/dashboard/StatsCard";
import MissingSkills from "../components/dashboard/MissingSkills";
import ProgressChart from "../components/dashboard/ProgressChart";


const Dashboard = () => {
  const location = useLocation();
  const state = location.state;

  if (!state ||!state.currentRole || !state.targetRole) {
    return <p>Please select roles first.</p>;
  }


  const { currentRole, targetRole } = state;

  const skillMatrix = compareSkills(
    currentRole.skills,
    targetRole.skills
  );

  const readiness = calculateReadiness(skillMatrix);

  const missingSkills = skillMatrix.filter(s => !s.hasSkill);

  const roadmap = generateRoadmap(skillMatrix);


  // Fake progress data for chart
  const chartData = roadmap.map((step, index) => ({
    week: `W${step.week}`,
    progress: Math.min((index + 1) * 10, 100)
  }));

   
   if (missingSkills.length === 0) {
  return (
    <p className="text-green-500 font-medium">
      🎉 You are fully ready!
    </p>
  );
}

  return (
    <div className="space-y-6">
      <StatsCard readiness={readiness} />

      <ProgressChart data={chartData} />

      <MissingSkills skills={missingSkills} />
   
    </div>
  );
}

export default Dashboard
