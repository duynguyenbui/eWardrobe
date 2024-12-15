import React from 'react'
import Icon from '../icon/Icon'
import '../tailwind.css'
import { ArrowLeft, Home } from 'lucide-react'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <div className="group flex items-center space-x-3 font-bold text-3xl transition-all duration-300 ease-in-out hover:scale-105">
      <Link href="/" className="flex space-x-2 items-center">
        <ArrowLeft className="w-5 h-5" />
        <Icon width={48} height={48} />
        <span className="text-primary">
          e<span className="text-secondary text-5xl font-bold">Wardrobe</span>
        </span>
      </Link>
    </div>
  )
}

export default Logo
