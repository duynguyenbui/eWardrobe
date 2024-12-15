import { BaggageClaim } from 'lucide-react'
import '../tailwind.css'

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
  return <BaggageClaim width={width} height={height} />
}

export default Icon
