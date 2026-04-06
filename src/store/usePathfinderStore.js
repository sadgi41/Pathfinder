import React from 'react'
import { create } from 'zustand';

const usePathfinderStore = create((set) => ({
    currentRole: null,
    targetRole: null,
    setCurrentRole: (role) => set({ currentRole: role }),
    setTargetRole: (role) => set({ targetRole: role }),
    reset: () => set({ currentRole: null, targetRole: null })
}));

export { usePathfinderStore }
