import React from 'react'
import PropTypes from 'prop-types'

import Product from './Product'

const Products = (props) => (
  <section className="section section-products" role="products">
    {props.items.map((product, i) => <Product key={`key-${product.id}`} {...product} isRight={++i % 2 === 0} isLast={++i === props.items.length} />)}
  </section>
)

Products.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(Product.propTypes)
  ).isRequired,
}

export default Products

export const ProductFragment = graphql`
  fragment ProductFragment on MarkdownRemark {
    frontmatter {
      langKey
      templateKey
      title
      products {
        id
        title
        description
        detail
        image
        logo
        cloud
        info {
          name
          expire
          packageWeight
          packageSize
          code
        }
      }
    }
  }
`
