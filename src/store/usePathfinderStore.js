import React from 'react'
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const usePathfinderStore = create(
  persist(
    (set) => ({
      currentRole: null,
      targetRole: null,
      completedSkills: [],

      setCurrentRole: (role) => set({ currentRole: role }),
      setTargetRole: (role) => set({ targetRole: role }),

      toggleSkill: (skillName) =>
        set((state) => ({
          completedSkills: state.completedSkills.includes(skillName)
            ? state.completedSkills.filter(s => s !== skillName)
            : [...state.completedSkills, skillName]
        })),


      reset: () => set({ currentRole: null, targetRole: null })
    }),
    {
      name: "pathfinder-storage" // key in localStorage
    }
  )
);

export { usePathfinderStore };
