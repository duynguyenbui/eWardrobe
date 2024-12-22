'use client'

import { getAllCategories } from '@/actions/categories'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CLOTHES_CATEGORIES } from '@/constants/data'
import { DATA_FETCH_FAILED, DATA_FETCHED_SUCCESSFULLY } from '@/constants/message'
import { Category } from '@/payload-types'
import { Gavel } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

const CategoriesPage = () => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    getAllCategories()
      .then((categories) => {
        toast.success(DATA_FETCHED_SUCCESSFULLY)
        setCategories(categories)
      })
      .catch((error) => {
        console.error(error)
        toast.error(DATA_FETCH_FAILED)
        setCategories([])
      })
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 mt-8">
      {categories.map((category) => (
        <Card key={category.name}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {category.name}
              <Badge className="text-muted-foreground ml-2" variant="outline">
                {category.slug}
              </Badge>
            </CardTitle>
            <Gavel className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm">{category.description}</p>
          </CardContent>
          <CardFooter className="flex space-x-3 text-xs text-muted-foreground">
            <span>Created at: {new Date(category.createdAt).toLocaleDateString()}</span>
            <span>|</span>
            <span>Updated at: {new Date(category.updatedAt).toLocaleDateString()}</span>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default CategoriesPage
