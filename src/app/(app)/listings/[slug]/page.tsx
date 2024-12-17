import React from 'react'

type Params = Promise<{ slug: string[] }>

const ProductDetailPage = async ({ params }: { params: Params }) => {
  return <div>ProductDetailPage</div>
}

export default ProductDetailPage
