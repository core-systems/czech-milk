import React from 'react'
import { ProductPageTemplate } from '../../templates/product-page'

const ProductPagePreview = ({ entry, getAsset }) => {
  const entryProducts = entry.getIn(['data', 'products'])
  const products = entryProducts ? entryProducts.toJS() : []

  return (
    <ProductPageTemplate
      title={entry.getIn(['data', 'title'])}
      meta={entry.getIn(['data', 'meta'])}
      products={products}
      helmet={''}
    />
  )
}

export default ProductPagePreview
