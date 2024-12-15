import { getProductVariants } from '@/actions/variants'
import { Button } from '@/components/ui/button'
import { Variants } from '@/components/variants'
import { AlertCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

type Params = Promise<{ slug: string[] }>

const ProductDetailPage = async ({ params }: { params: Params }) => {
  const { slug } = await params

  if (!slug || slug.length === 0) {
    notFound()
  }

  const { docs: variants, totalDocs } = await getProductVariants(slug[0])

  if (!variants || totalDocs === 0) {
    return (
      <div className="flex items-center justify-center mt-20">
        <div className="max-w-md w-fullborder rounded-lg shadow-lg p-8 text-center">
          <AlertCircle className="mx-auto h-12 w-12 text-yellow-400 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Variants of this product is not available
          </h1>
          <p className="text-gray-600 mb-6">
            We couldn&apos;t find the product you&apos;re looking for. It may be out of stock or no
            longer available.
          </p>
          <div className="space-y-4">
            <Button asChild variant="default" className="w-full">
              <Link href="/listings" className="flex items-center justify-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Browse All Products
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return <Variants variants={variants} />
}

export default ProductDetailPage
