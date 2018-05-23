import React from 'react'
import PropTypes from 'prop-types'

import Product from './Product'

const Products = (props) => (
  <section className="section section-products" role="products" id="all">
    {props.items.map((product, i) => {
        const index = ++i
        return (<Product key={`key-${product.id}`} {...product} isRight={index % 2 === 0} isLast={index === props.items.length} />)
    })}
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
        image {
          childImageSharp {
            sizes (maxWidth: 960) {
              ...GatsbyImageSharpSizes_withWebp
            }
          }
        }
        logo {
          childImageSharp {
            resolutions (width: 250) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
        cloud {
          childImageSharp {
            sizes (maxWidth: 960) {
              ...GatsbyImageSharpSizes_withWebp
            }
          }
        }
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
