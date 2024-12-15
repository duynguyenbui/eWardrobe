import { Product } from '@/payload-types'
import { create } from 'zustand'

interface CartState {
  cartItems: Product[]
  addItemToCart: (item: string) => void
}

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  addItemToCart: (item) => console.log(item),
}))
