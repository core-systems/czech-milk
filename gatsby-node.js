const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              id
              fields {
                slug,
                langKey
              }
              frontmatter {
                templateKey,
                date,
                title
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach((edge) => {
        const templateKey = edge.node.frontmatter.templateKey || 'blog-post'
        const id = edge.node.id
        const cid = edge.node.contentfulid
        const locale = edge.node.node_locale
        createPage({
          //path: `/${locale}/blog/posts/${id}`,
          layout: edge.node.fields.langKey,
          path: edge.node.fields.slug,
          //component: path.resolve(`./src/templates/blog-post.js`),
          component: path.resolve(
            `src/templates/${String(templateKey)}.js`
          ),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            id: edge.node.id,
            slug: edge.node.fields.slug,
            langKey: edge.node.fields.langKey,
          },
        })
      })
      resolve()
    })
  })
}
