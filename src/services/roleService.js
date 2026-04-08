export async function getRoles() {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!res.ok) throw new Error("API failed");

    const data = await res.json();

    const skillSets = [
      ["HTML", "CSS", "JavaScript"],
      ["React", "State Management", "APIs"],
      ["Testing", "Performance", "System Design"]
    ];

    return data.slice(0, 6).map((user, index) => ({
      id: user.id,
      title: "Frontend Developer",
      level: index < 3 ? "Junior" : "Senior",
      skills: skillSets[index % skillSets.length]
    }));
  } catch (error) {
    console.error("Error fetching roles:", error);
    return [];
  }
}