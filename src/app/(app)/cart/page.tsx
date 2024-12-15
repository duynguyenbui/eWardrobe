'use client'

import { Button } from '@/components/ui/button'
import { useCartStore } from '@/hooks/use-cart'
import React from 'react'

const CartPage = () => {
  const { cartItems, addItemToCart } = useCartStore()

  return (
    <div>
      <Button onClick={() => addItemToCart('item')}>Add To Cart</Button>
    </div>
  )
}

export default CartPage
