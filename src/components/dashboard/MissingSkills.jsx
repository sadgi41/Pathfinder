import React from 'react'

const MissingSkills = ({ skills }) => {
    return (
        <div className="p-6 rounded-xl border border-gray-300 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-4">
                Skills to Improve
            </h3>

            <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                    <span
                        key={skill.name}
                        className="px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/20 text-sm"
                    >
                        {skill.name}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default MissingSkills
