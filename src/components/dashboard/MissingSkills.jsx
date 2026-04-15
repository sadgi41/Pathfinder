import React from 'react'

const MissingSkills = ({ skills }) => {
    return (
        <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold tracking-tight mb-4">
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
            <div className="space-y-8"></div>
        </div>
    )
}

export default MissingSkills
