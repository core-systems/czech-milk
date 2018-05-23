const languages = require('./src/data/languages')
//console.log('languages>', languages)
const gtm = `GTM-TJZWRGC`

module.exports = {
  siteMetadata: {
    title: 'Czech Milk',
    languages,
    gtm: `${gtm}`,
  },
  plugins: [
    `gatsby-plugin-react-next`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    'gatsby-plugin-react-helmet',
    //'gatsby-plugin-catch-links',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              // Set the name option to the same
              // name you set for gatsby-source-filesystem
              name: 'uploads', // default
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 786,
              //backgroundColor: `#ffffff`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.05rem`,
            },
          },
          //`gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          //`gatsby-remark-autolink-headers`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#9D7CBF`,
        showSpinner: true,
      },
    },
    /*
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },*/
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        markdownRemark: {
          postPage: 'src/templates/blog-post.js',
          query: `
          {
              allMarkdownRemark {
                  edges {
                    node {
                        id
                        fields {
                        slug,
                        langKey
                        }
                    }
                  }
              }
          }
          `
        }
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
        resolve: `gatsby-plugin-google-tagmanager`,
        options: {
          id: `${gtm}`,

          // Include GTM in development.
          // Defaults to false meaning GTM will only be loaded in production.
          includeInDevelopment: false,

          // Specify optional GTM environment details.
          //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
          //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
        },
      },
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      'gatsby-plugin-netlify-lambda',
  ],
}
