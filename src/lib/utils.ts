import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const date = (dateString: string): string => {
  const parsedDate = new Date(dateString)

  const padZero = (num: number): string => num.toString().padStart(2, '0')

  const day = padZero(parsedDate.getDate())
  const month = padZero(parsedDate.getMonth() + 1)
  const year = parsedDate.getFullYear()
  const hours = padZero(parsedDate.getHours())
  const minutes = padZero(parsedDate.getMinutes())

  return `${day}/${month}/${year} ${hours}:${minutes}`
}
