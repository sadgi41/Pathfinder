export async function getRoles() {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!res.ok) throw new Error("API failed");

    const data = await res.json();

    // 🔥 Skill pool (realistic)
    const skillPool = [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "APIs",
      "Git",
      "Testing",
      "Performance",
      "System Design",
      "State Management"
    ];

    const levels = ["Beginner", "Intermediate", "Advanced"];

    // 🎲 helper to get random skills
    function getRandomSkills(count, isSenior) {
      const shuffled = [...skillPool].sort(() => 0.5 - Math.random());

      return shuffled.slice(0, count).map(skill => ({
        name: skill,
        level: isSenior
          ? levels[Math.floor(Math.random() * 2) + 1] // Intermediate/Advanced
          : levels[Math.floor(Math.random() * 2)]     // Beginner/Intermediate
      }));
    }

    return data.slice(0, 6).map((user, index) => {
      const isJunior = index < 3;

      return {
        id: user.id,
        title: "Frontend Developer",
        level: isJunior ? "Junior" : "Senior",
        skills: getRandomSkills(
          isJunior ? 4 : 5,
          !isJunior
        )
      };
    });
  } catch (error) {
    console.error("Error fetching roles:", error);
    return [];
  }
}