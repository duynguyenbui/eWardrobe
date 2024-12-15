'use client'

import { ProductVariant } from '@/payload-types'
import { Button } from './ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { VariantCard } from './variant-card'

interface VariantProps {
  variants: ProductVariant[]
}

export const Variants = ({ variants }: VariantProps) => {
  const router = useRouter()

  return (
    <div>
      <div className="flex justify-between space-x-2">
        <Button variant="link" onClick={() => router.back()} className="mb-4">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <div className="text-muted-foreground text-sm hidden md:flex italic">
          <h2>
            {variants.length} Variants Available of{' '}
            {typeof variants[0].product !== 'number' && variants[0].product.name}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {variants.length > 0 &&
          variants.map((variant) => <VariantCard key={variant.id} variant={variant} />)}
      </div>
    </div>
  )
}
