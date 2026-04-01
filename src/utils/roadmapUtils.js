export function generateRoadmap(skillMatrix) {
  const missingSkills = skillMatrix.filter(skill => !skill.hasSkill);

  let week = 1;

  return missingSkills.flatMap(skill => [
    {
      week: week++,
      title: `${skill.name} Basics`
    },
    {
      week: week++,
      title: `${skill.name} Advanced`
    }
  ]);
}
