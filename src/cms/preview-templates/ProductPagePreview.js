import React from 'react'
import { ProductPageTemplate } from '../../templates/product-page'

const ProductPagePreview = ({ entry, getAsset }) => {
  console.log('cms - entry', entry)
  console.log('cms - title', entry.getIn(['data', 'title']))
  console.log('cms - title', entry.getIn(['data', 'meta']))
  console.log('cms - products', entry.getIn(['data', 'products']).toJS())
  console.log('cms - getAsset', getAsset)
  const entryProducts= entry.getIn(['data', 'products'])
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
