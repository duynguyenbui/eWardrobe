import React from 'react'

type Params = Promise<{ slug: string[] }>

const ProductDetailPage = async ({ params }: { params: Params }) => {
  const { slug } = await params

  console.log(slug)
  return <div>ProductDetailPage</div>
}

export default ProductDetailPage
