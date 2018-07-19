import React from 'react'
import favicon from '../static/img/czechmilk-favicon.ico'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          {css}
          <link
            defer="defer"
            href="https://fonts.googleapis.com/css?family=Roboto"
            crossOrigin="anonymous"
            rel="stylesheet"
          />
          <link
            defer="defer"
            href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
            integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
            crossOrigin="anonymous"
            rel="stylesheet"
          />
          <link rel="shortcut icon" type="image/x-icon" href={favicon} />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src="/js/dynamicListener.min.js" defer="defer" />
          <script src="/js/index.js" defer="defer" />
          {/*
          <script
            dangerouslySetInnerHTML={{
              __html: `
            `,
            }}
          />
          */}
        </body>
      </html>
    )
  }
}
