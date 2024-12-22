import { User } from '@/payload-types'
import { create } from 'zustand'
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'

interface UseState {
  user: User | null
  setUser: (user: User | null) => void
}

export const useUserStore = create(
  persist<UseState>(
    (set, get) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    } as PersistOptions<UseState>,
  ),
)
