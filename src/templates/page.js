import React from 'react'
import Helmet from 'react-helmet'
import { injectIntl, intlShape, } from 'react-intl'
import Content, { HTMLContent } from '../components/Content'

export const OtherPageTemplate = injectIntl(({
  title,
  content,
  contentComponent,
  helmet,
  intl,
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section-about-page section--gradient">
      {helmet || ''}
      <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
        {title}
      </h2>
      <PageContent className="content" content={content} />
    </section>
  )
})

export default ({ data }) => {
  //console.log('about', data)
  const { otherPage: page } = data

  return (
    <OtherPageTemplate
      contentComponent={HTMLContent}
      title={page.frontmatter.title}
      content={page.html}
      helmet={<Helmet title={`${page.frontmatter.title}`} />}
    />
  )
}

export const otherPageQuery = graphql`
  query OtherPage($id: String!) {
    otherPage: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
