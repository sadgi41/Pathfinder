import React from "react";

const SkillsMatrix = ({skills}) => {
  console.log("skills:", skills);
  
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
          className={`flex justify-between p-4 rounded-lg border ${
            skill.hasSkill
              ? "border-green-500 bg-green-50 dark:bg-green-900/20"
              : "border-red-500 bg-red-50 dark:bg-red-900/20"
          }`}
        >
          <span>{skill.name}</span>
          <span>{skill.hasSkill ? "✅" : "❌"}</span>
        </div>
      ))}
    </div>
  );
}

export default SkillsMatrix
