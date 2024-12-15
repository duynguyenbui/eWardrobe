'use client'

import { getCategories } from '@/actions/categories'
import { getTypes } from '@/actions/types'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useEffect, useState } from 'react'

interface TypeFilterProps {
  setType: (type: string) => void
}

export function TypeFilter({ setType }: TypeFilterProps) {
  const [types, setTypes] = useState<string[]>([])

  useEffect(() => {
    getTypes().then((res) => {
      const { docs } = res
      const types = new Set(docs.map((doc) => doc.value))

      setTypes(
        Array.from(types).filter((type): type is string => type !== null && type !== undefined),
      )
    })
  }, [])

  return (
    <Select defaultValue="all" onValueChange={(type) => setType(type)}>
      <SelectTrigger className="w-[200px] mb-10">
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Types</SelectItem>
        {types.map((type) => (
          <SelectItem key={type} value={type}>
            {type}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
