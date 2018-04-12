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
};

/*
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          //id: edge.node.id,
          slug: node.fields.slug,
        },
      })
    })
  })
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

exports.modifyWebpackConfig = ({config, env, stage}, options) => {
  console.log('env, stage', env, stage)
  console.log('modifyWebpackConfig', config)
  console.log('modifyWebpackConfig.loaders', config.loaders)
  return config;
  const sassFiles = /.s[ac]ss$/
  const sassModulesFiles = /.module.s[ac]ss$/
  const sassLoader = 'sass?${JSON.stringify(options)}'
  switch (stage) {
    case 'develop': {
      config.loader('sass', {
        test: sassFiles,
        exclude: sassModulesFiles,
        loaders: ['style', 'css', 'resolve-url-loader', 'sass-loader?sourceMap']
        //loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
      });
      return config;
    }
    default: {
        return config
    }
  }
}

/*
  config.loader('url-loader', {
    test: /\.(jpg|jpeg|png|gif|mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
    loader: 'url',
    query: {
      limit: 10000,
      name: 'static/[name].[hash:8].[ext]',
    },
  });
  */
/*
  config.loader('sass', {
    test: /\.(sass|scss)/,
    loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
  })
  */
