import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SkillsMatrix from "../components/skills/SkillsMatrix";
import { compareSkills, calculateReadiness } from "../utils/skillUtils";
import { usePathfinderStore } from '../store/usePathfinderStore';

const SkillGap = () => {

    const navigate = useNavigate();
    const location = useLocation();
    // const state = location.state;

    const { currentRole, targetRole } = usePathfinderStore();


    if (!currentRole || !targetRole) {
        return (
            <p className="text-gray-500">
                Please go back and select roles first.
            </p>
        );
    }

     const skillMatrix = compareSkills(
        currentRole.skills,
        targetRole.skills
    );

    const missingSkills = skillMatrix.filter(s => !s.hasSkill);

    // const { currentRole, targetRole } = state;

   

    const readiness = calculateReadiness(skillMatrix);

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">
                Skill Gap Analysis
            </h2>

            <p className="text-gray-600 dark:text-gray-400">
                You are <strong>{readiness}%</strong> ready for the{" "}
                <strong>{targetRole.title}</strong> role.
            </p>

            <SkillsMatrix skills={skillMatrix} />

            <div className="mt-6">
              
                {missingSkills.length === 0 ? (
                    <p className="text-green-500 font-medium p-16">
                        🎉 You have all required skills!
                    </p>
                ) : (
                     <div className="py-8">
      <h3 className="text-xl font-semibold mb-3 text-red-500">
                    Missing Skills
                </h3>
                    <div className="flex py-8 items-center justify-center flex-wrap gap-4">
                        {missingSkills.map(skill => (
                            <span
                                key={skill.name}
                                className="px-6 py-3 rounded-full bg-red-100 dark:bg-red-900/20 text-sm"
                            >
                                {skill.name}
                            </span>
                        ))}
                    </div>
                    </div>
                )}
            </div>

            <button
                onClick={() =>
                    navigate("/roadmap")
                }
                className="px-6 py-3 m-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
            >
                Generate Roadmap
            </button>

        </div>
    );
}

export default SkillGap
