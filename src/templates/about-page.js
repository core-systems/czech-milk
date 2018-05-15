import React from 'react'
import Helmet from 'react-helmet'
import { injectIntl, intlShape, } from 'react-intl'
import Content, { HTMLContent } from '../components/Content'
import ContactForm from '../components/ContactForm'

export const AboutPageTemplate = injectIntl(({
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
      <ContactForm topic={`[${intl.locale.toUpperCase()}] Contact - About Us`} />
    </section>
  )
})

export default ({ data }) => {
  //console.log('about', data)
  const { aboutPage: post } = data

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
      helmet={<Helmet title={`${post.frontmatter.title}`} />}
    />
  )
}

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    aboutPage: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
