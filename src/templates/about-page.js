import React from 'react'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  helmet,
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
}

export default ({ data }) => {
  console.log('about', data)
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
