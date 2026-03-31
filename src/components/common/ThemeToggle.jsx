import React from 'react'
import { useState, useEffect } from "react";

const ThemeToggle = () => {
    const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
   <button
      onClick={() => setDark(!dark)}
      className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-700"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  )
}

export default ThemeToggle
