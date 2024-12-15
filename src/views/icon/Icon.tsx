'use client'

import { BaggageClaim } from 'lucide-react'
import '../tailwind.css'
import { usePathname, useRouter } from 'next/navigation'

type IconProps = {
  width: number
  height: number
}

const Icon: React.FC<IconProps> = ({
  width = 17,
  height = 17,
}: {
  width: number
  height: number
}) => {
  const pathname = usePathname()
  const router = useRouter()

  const back = () => {
    if (pathname === '/admin') {
      router.push('/')
    }
  }

  return <BaggageClaim width={width} height={height} onClick={back} />
}

export default Icon
