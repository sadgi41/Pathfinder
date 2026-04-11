const levelScore = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3
};

export function compareSkills(currentSkills, targetSkills) {
   return targetSkills.map(target => {
    const found = currentSkills.find(
      skill => skill.name === target.name
    );

    return {
      name: target.name,
      requiredLevel: target.level,
      userLevel: found ? found.level : null,
      hasSkill: !!found,
      score: found
        ? Math.min(
            levelScore[found.level] / levelScore[target.level],
            1
          )
        : 0
    };
  });
}

export function calculateReadiness(skillMatrix) {
  const total = skillMatrix.length;

  const scoreSum = skillMatrix.reduce(
    (sum, skill) => sum + skill.score,
    0
  );

  return Math.round((scoreSum / total) * 100);
}