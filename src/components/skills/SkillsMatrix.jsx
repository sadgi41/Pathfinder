import React from "react";
import { usePathfinderStore } from "../../store/usePathfinderStore";



const SkillsMatrix = ({ skills }) => {
  console.log("skills:", skills);


  const toggleSkill = usePathfinderStore((state) => state.toggleSkill);

  if (!skills) {
    return <p className="text-gray-500">Loading...</p>;
  }

  if (skills.length === 0) {
    return <p className="text-gray-500">No skills available</p>;
  }

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {skills.map(skill => (
       <div
  key={skill.name}
  onClick={() => {toggleSkill(skill.name);
    console.log("clicked:", skill.name);
  }}
  className={`cursor-pointer flex justify-between items-center p-4 rounded-xl border transition ${
    skill.isCompleted
      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
      : skill.score === 1
      ? "border-green-400 bg-green-50 dark:bg-green-900/20"
      : skill.score > 0
      ? "border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20"
      : "border-red-400 bg-red-50 dark:bg-red-900/20"
  }`}
>
          <span>{skill.name}</span>
          <span className="text-sm text-gray-500">
            {skill.userLevel || "None"} → {skill.requiredLevel}
          </span>
          <span>{skill.hasSkill ? "✅" : "❌"}</span>
<span>
  {skill.isCompleted ? "✅ Done" : "Mark"}
</span>
        </div>
      ))}
    </div>
  );
}

export default SkillsMatrix
