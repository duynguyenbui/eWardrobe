import { create } from 'zustand'

interface CartState {
  cartItems: string[]
  addItemToCart: (item: string) => void
}

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  addItemToCart: (item) => console.log(item),
}))
