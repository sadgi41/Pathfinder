export function compareSkills(currentSkills, targetSkills) {
  return targetSkills.map(skill => ({
    name: skill,
    hasSkill: currentSkills.includes(skill)
  }));
}

export function calculateReadiness(skillMatrix) {
  const total = skillMatrix.length;
  const acquired = skillMatrix.filter(s => s.hasSkill).length;
  return Math.round((acquired / total) * 100);
}
