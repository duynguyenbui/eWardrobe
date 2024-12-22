import { create } from 'zustand'

type Modals = 'delete-addr' | 'create-addr' | ''

interface ModalsState {
  isOpen: boolean
  type: Modals
  open: ({ modal, data }: { modal: Modals; data?: any }) => void
  close: () => void
  data: any
}

export const useModalsState = create<ModalsState>((set) => ({
  isOpen: false,
  type: '',
  data: null,
  open: ({ modal, data }) => set({ isOpen: true, type: modal, data }),
  close: () => set({ isOpen: false, type: '', data: {} }),
}))
