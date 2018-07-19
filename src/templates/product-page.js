import React from 'react'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'

import Products, { ProductFragment } from '../components/Products'

export const ProductPageTemplate = ({ helmet, title, products }) => (
  <React.Fragment>
    {helmet || ''}
    <h1 className="is-hidden">
      <FormattedMessage id="products" />
    </h1>
    <Products items={products} />
  </React.Fragment>
)

export default ({ data }) => {
  // /console.log('produts, data', data)
  const { frontmatter } = data.allProducts

  return (
    <ProductPageTemplate
      title={frontmatter.title}
      products={frontmatter.products}
      helmet={<Helmet title={`${frontmatter.title}`} />}
    />
  )
}

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    allProducts: markdownRemark(id: { eq: $id }) {
      ...ProductFragment
    }
  }
`
