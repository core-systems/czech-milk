import React from 'react'
import { FormattedMessage } from 'react-intl'

import Products, { ProductFragment } from '../components/Products'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { frontmatter: productsPage } = data.csProducts

    return (
      <React.Fragment>
        <h1 className="is-hidden">
          <FormattedMessage id="products" />
        </h1>
        <Products items={productsPage.products} />}
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query IndexCsQuery {
    csProducts: markdownRemark(frontmatter: { langKey: { eq: "cs" }, templateKey: { eq: "product-page" } }) {
    	...ProductFragment
    }
  }
`
