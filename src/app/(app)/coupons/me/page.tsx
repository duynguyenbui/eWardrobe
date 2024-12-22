'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getUserCoupons } from '@/actions/coupons'
import { Coupon } from '@/payload-types'
import { cn, date } from '@/lib/utils'
import { ArrowLeft, MonitorDotIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { toast } from 'sonner'
import { DATA_FETCHED_SUCCESSFULLY } from '@/constants/message'
import { useAuth } from '@/hooks/use-auth'
import { Loader } from '@/components/loader'
import { useUserStore } from '@/hooks/use-user'

const MyCouponsPage = () => {
  const { user } = useUserStore()
  const [coupons, setCoupons] = useState<Coupon[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (user) {
      setIsLoading(true)
      getUserCoupons()
        .then((fetchedCoupons) => {
          setCoupons(fetchedCoupons)
          setIsLoading(false)
          toast.success(DATA_FETCHED_SUCCESSFULLY)
        })
        .catch((error) => {
          console.error('Error fetching coupons:', error)
          setIsLoading(false)
          toast.error('Failed to fetch coupons')
        })
    }
  }, [user])

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex space-x-2 items-center">
        <div className="mb-2">
          <h2 className="text-2xl font-bold">My Coupons</h2>
          <span className="text-sm text-muted-foreground">The coupons that are not used yet.</span>
        </div>
        <Link
          className={cn(buttonVariants({ variant: 'ghost' }), 'flex space-x-2 items-center')}
          href="/coupons"
        >
          <ArrowLeft className="w-4 h-4" />
          Back To Available Coupons
        </Link>
      </div>
      {isLoading ? (
        <Loader />
      ) : coupons.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coupons.map((coupon) => (
            <Card className="hover:shadow-lg transition-shadow duration-300" key={coupon.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-2xl font-bold text-primary">
                  # {coupon.discount}
                </CardTitle>
                <MonitorDotIcon className="w-6 h-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="font-mono text-lg mb-2 bg-secondary-foreground/10 p-2 rounded text-center">
                  {coupon.code}
                </p>
                <p className="text-sm text-muted-foreground mb-4">{coupon.description}</p>
                <dl className="grid grid-cols-2 gap-1 text-sm">
                  <dt className="font-semibold">Type:</dt>
                  <dd>{coupon.discount_type === 'fixed_amount' ? 'Fixed Amount' : 'Percentage'}</dd>
                  <dt className="font-semibold">Min Purchase:</dt>
                  <dd>${coupon.minimum_price_to_use}</dd>
                  <dt className="font-semibold">Valid From:</dt>
                  <dd>{date(coupon.start_date)}</dd>
                  <dt className="font-semibold">Expires:</dt>
                  <dd>{date(coupon.end_date)}</dd>
                </dl>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-lg font-semibold mb-2">You don&apos;t have any coupons yet.</p>
          <p className="text-muted-foreground">Check out the available coupons to get started!</p>
        </div>
      )}
    </div>
  )
}

export default MyCouponsPage
