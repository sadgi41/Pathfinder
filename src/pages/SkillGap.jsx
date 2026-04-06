import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import SkillMatrix from "../components/skills/SkillsMatrix";
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



    // const { currentRole, targetRole } = state;

    const skillMatrix = compareSkills(
        currentRole.skills,
        targetRole.skills
    );

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

            <SkillMatrix skills={skillMatrix} />

            <button
                onClick={() =>
                    navigate("/roadmap") 
                }
                className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
            >
                Generate Roadmap
            </button>

        </div>
    );
}

export default SkillGap
