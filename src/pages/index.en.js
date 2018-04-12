import React from 'react'
import { FormattedMessage } from 'react-intl'

import Products from '../components/Products'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <React.Fragment>
        <h1 className="is-hidden">
          <FormattedMessage id="products" />
        </h1>
        <Products />
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query IndexEnQuery {
    allMarkdownRemark(filter: { fields: { slug: { regex: "/\/en\/*/" } }}, sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
