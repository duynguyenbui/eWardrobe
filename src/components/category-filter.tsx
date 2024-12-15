'use client'

import { getCategories } from '@/actions/categories'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useEffect, useState } from 'react'

interface CategoryFilterProps {
  setCategory: (category: string) => void
}

export function CategoryFilter({ setCategory }: CategoryFilterProps) {
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    getCategories().then((res) => {
      const { docs } = res
      const categories = new Set(docs.map((doc) => doc.name))

      setCategories(
        Array.from(categories).filter(
          (category): category is string => category !== null && category !== undefined,
        ),
      )
    })
  }, [])

  return (
    <Select defaultValue="all" onValueChange={(category) => setCategory(category)}>
      <SelectTrigger className="w-[200px] mb-10">
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Categories</SelectItem>
        {categories.map((category) => (
          <SelectItem key={category} value={category}>
            {category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
