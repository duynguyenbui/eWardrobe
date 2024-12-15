'use client'

import React, { useEffect, useState } from 'react'
import { ProductCard } from '@/components/product-card'
import { getPaginatedProducts } from '@/actions/products'
import { Product } from '@/payload-types'
import { toast } from 'sonner'
import { GET_PRODUCTS_FAILURE_MESSAGE, GET_PRODUCTS_SUCCESS_MESSAGE } from '@/constants/message'
import { CategoryFilter } from '@/components/category-filter'
import { TypeFilter } from '@/components/type-filter'
import { ITEMS_PER_PAGE } from '@/constants/constant'

const ListingsPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [totalDocs, setTotalDocs] = useState<number>(0)
  const [category, setCategory] = useState<string | null>(null)
  const [type, setType] = useState<string | null>(null)

  useEffect(() => {
    getPaginatedProducts({ category: category, limit: ITEMS_PER_PAGE, type: type })
      .then((res) => {
        const { docs: products, totalDocs, pagingCounter } = res

        if (products.length >= 0) {
          setProducts(products)
          setTotalDocs(totalDocs)
          toast.success(GET_PRODUCTS_SUCCESS_MESSAGE)
        }
      })
      .catch((err) => toast.error(GET_PRODUCTS_FAILURE_MESSAGE))
  }, [category, type])

  return (
    <div className="container mx-auto px-4 py-5">
      <div className="flex justify-between items-center text-center ml-5 md:ml-1">
        <div className="flex space-x-2">
          <CategoryFilter setCategory={setCategory} />
          <TypeFilter setType={setType} />
        </div>
        <div className="text-muted-foreground text-sm -mt-10 hidden md:flex italic">
          Showing {products.length} products based on your filters
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-8"></div>
    </div>
  )
}

export default ListingsPage
