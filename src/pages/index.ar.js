import React from 'react'
import { FormattedMessage } from 'react-intl'

import Products, { ProductFragment } from '../components/Products'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { frontmatter: productsPage } = data.arProducts

    return (
      <React.Fragment>
        <h1 className="is-hidden">
          <FormattedMessage id="products" />
        </h1>
        <Products items={productsPage.products} />
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query IndexArQuery {
    arProducts: markdownRemark(
      frontmatter: {
        langKey: { eq: "ar" }
        templateKey: { eq: "product-page" }
      }
    ) {
      ...ProductFragment
    }
  }
`
