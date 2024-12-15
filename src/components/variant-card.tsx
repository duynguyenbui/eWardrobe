'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ShoppingCart, PiggyBank } from 'lucide-react'
import { toast } from 'sonner'

import { Price, ProductVariant } from '@/payload-types'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getPrices } from '@/actions/price'
import { parse } from '@/lib/image'
import { VARIANT_LOADED_SUCCESS_MESSAGE } from '@/constants/message'

interface VariantCardProps {
  variant: ProductVariant
}

export const VariantCard: React.FC<VariantCardProps> = ({ variant }) => {
  const [prices, setPrices] = useState<Price[]>([])

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const fetchedPrices = await getPrices(variant.id)
        setPrices(fetchedPrices)
        toast.success(VARIANT_LOADED_SUCCESS_MESSAGE)
      } catch (err) {
        toast.error((err as Error).message)
      }
    }

    fetchPrices()
  }, [variant.id])

  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={parse(variant.images[0]) || '/product-placeholder.svg'}
          alt={variant.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <span className="text-xl font-semibold line-clamp-2">{variant.name}</span>
          <Badge variant="secondary" className="self-start sm:self-center">
            Stock: {variant.sku}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-start space-x-2">
          <PiggyBank className="w-6 h-6 mt-1 text-green-500 flex-shrink-0" />
          <div className="flex flex-wrap gap-2">
            {prices.map((price) => (
              <Badge key={price.id} variant="outline">
                ${price.amount} for {price.min_quantity}-{price.max_quantity}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full group" variant="outline">
          <ShoppingCart className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
