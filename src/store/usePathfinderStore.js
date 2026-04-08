import React from 'react'
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const usePathfinderStore = create(
  persist(
    (set) => ({
      currentRole: null,
      targetRole: null,

      setCurrentRole: (role) => set({ currentRole: role }),
      setTargetRole: (role) => set({ targetRole: role }),

      reset: () => set({ currentRole: null, targetRole: null })
    }),
    {
      name: "pathfinder-storage" // key in localStorage
    }
  )
);

export { usePathfinderStore };
