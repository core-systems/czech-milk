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

exports.onCreateNode = ({
  node,
  getNode,
  loadNodeContent,
  boundActionCreators,
}) => {
  const { frontmatter } = node
  if (frontmatter) {
    //console.log(' node - markdown - frontmatter - products', frontmatter.products)
    const { products } = frontmatter

    for (const i in products) {
      const product = products[i]
      const { id, image, logo, cloud } = product
      //console.log('product - id, image, logo, cloud', id, image, logo, cloud)

      if (image) {
        if (image.indexOf('/img') === 0) {
          frontmatter.products[i].image = path.relative(
            path.dirname(node.fileAbsolutePath),
            path.join(__dirname, '/static/', image)
          )
        }
      }
      if (logo) {
        if (logo.indexOf('/img') === 0) {
          frontmatter.products[i].logo = path.relative(
            path.dirname(node.fileAbsolutePath),
            path.join(__dirname, '/static/', logo)
          )
        }
      }
      if (cloud) {
        if (cloud.indexOf('/img') === 0) {
          frontmatter.products[i].cloud = path.relative(
            path.dirname(node.fileAbsolutePath),
            path.join(__dirname, '/static/', cloud)
          )
        }
      }
    }
  }
}

/*
exports.onCreateNode = ({
  node,
  getNode,
  loadNodeContent,
  boundActionCreators,
}) => {
  const { frontmatter } = node
  if (frontmatter) {
    const { image } = frontmatter
    if (image) {
      if (image.indexOf('/img') === 0) {
        const { createNodeField } = boundActionCreators;
        const localFile = path.relative(
          path.dirname(node.fileAbsolutePath),
          path.join(__dirname, '/static/', image)
        )
        createNodeField({
          node,
          name: 'localFile',
          value: localFile,
        })
      }
    }
  }
}
*/


/*
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
   const { createNodeField } = boundActionCreators

   if (node.internal.type === `MarkdownRemark`) {
     const value = createFilePath({ node, getNode })
     createNodeField({
       name: `slug`,
       node,
       value,
     })
   }
 }
*/
