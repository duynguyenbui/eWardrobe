import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import { parse } from '@/lib/image'
import { Product } from '@/payload-types'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { Badge } from './ui/badge'
import { cn } from '@/lib/utils'

export const ProductCard = ({ product }: { product: Product }) => {
  const {
    name,
    images,
    description,
    materials,
    product_collection,
    product_categories,
    product_variants,
    origin_country,
  } = product

  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden transition-all duration-300 hover:shadow-lg">
      <Link href={`/listings/${product.id}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={parse(images[0]) || '/product-placeholder.svg'}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          {product_collection &&
            typeof product_collection !== 'number' &&
            typeof product_collection.title === 'string' && (
              <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                {product_collection.title}
              </Badge>
            )}
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-semibold line-clamp-2 items-center flex space-x-2">
            <span>{name}</span>
            <Badge variant="default" className="text-xs">
              {product_variants?.length ?? 0}
            </Badge>
          </CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="space-y-1">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-1">
          <p className="text-muted-foreground text-sm">Categories: </p>
          {product_categories.map((category, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {typeof category !== 'number' && category.name}
            </Badge>
          ))}
        </div>
        {materials && (
          <div className="text-sm flex space-x-2">
            <p className="text-muted-foreground">Materials: </p>
            {materials.map((data, index) => (
              <Badge key={index} variant="destructive" className="text-xs">
                {typeof data !== 'number' && data.material}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Link className={cn('w-full group', buttonVariants())} href={`/listings/${product.id}`}>
          <ShoppingCart className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
          Continue
        </Link>
      </CardFooter>
    </Card>
  )
}
