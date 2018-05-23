import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { IntlProvider } from 'react-intl'
import 'intl'

import BgImage from '../components/BgImage'
import Header from '../components/Header'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'

// All styles
import '../styles/all.sass'
import 'flag-icon-css/sass/flag-icon.scss'
// Load Roboto typeface
//import 'typeface-roboto'
//import 'font-awesome/css/font-awesome.css'


//import 'smooth-scroll'
//import scroll from 'smooth-scroll'

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  const scroll = require('smooth-scroll')
  const scrollInstance = scroll('a[href*="#"],[data-scroll]', { })
  window.scrollInstance = scrollInstance

  // Log scroll events
  var logScrollEvent = function (event) {

  	// The event type
  	console.log('type:', event.type);

  	// The anchor element being scrolled to
  	console.log('anchor:', event.detail.anchor);

  	// The anchor link that triggered the scroll
  	console.log('toggle:', event.detail.toggle);
    //scroll.animateScroll(anchor)
  };

  // Listen for scroll events
  document.addEventListener('scrollStart', logScrollEvent, false);
  document.addEventListener('scrollStop', logScrollEvent, false);
  document.addEventListener('scrollCancel', logScrollEvent, false);
}

function Fragment(props) {
  console.log('fragment', props)
  return props.children || <span {...props} /> || <React.Fragment {...props} /> || null
}

const TemplateWrapper = (props) => {
  const { children, data, location, locale, i18nMessages } = props
  const url = location.pathname
  const { langs, defaultLangKey, languages, langKeys } = data.site.siteMetadata.languages
  const langKey = getCurrentLangKey(langKeys, defaultLangKey, url)
  const actualLang = languages.find(x => x.key === langKey)
  const homeLink = `/${actualLang.key}/`
  const langsMenu = getLangs(langKeys, actualLang.key, getUrlForLang(homeLink, url))

  //console.log('props', props)
  //console.log('data.bgImage.sizes', data.bgImage.sizes)

  return (
    <IntlProvider
      locale={actualLang.key}
      //key={actualLang.key}
      defaultLocale={defaultLangKey}
      messages={i18nMessages}
      //textComponent={React.Fragment}
    >
      <div id="main-wrapper" className='is-fullwidth'>
        <Helmet
          defaultTitle={`Home | ${data.site.siteMetadata.title}`}
          titleTemplate={"%s | " + `${data.site.siteMetadata.title}`}
          meta={[
            { name: 'charset', content: 'UTF-8' },
            { name: 'description', content: 'Czech Milk' },
            { name: 'keywords', content: 'Czech, Milk, Core Systems' },
          ]}
          htmlAttributes={{
              lang: `${actualLang.key}`,
              //dir: `${actualLang.dir}`,
          }}
          bodyAttributes={{
              class: `env-${process.env.NODE_ENV} lang-${actualLang.key}`,
          }}
        >
            {/*<title itemProp="name" lang={`${actualLang.key}`}>{`${data.site.siteMetadata.title}`}</title>*/}
        </Helmet>
        {/*
        <BgImage
          sizes={data.bgImage.sizes}
          fit={'contain'}
          position={'top center'}
          height={'1421px'}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            //width: "100%",
            height: "1421px",
            //minHeight: "1421px",
            //maxHeight: "1421px",
          }}
        />
        */}
        <Header langs={langsMenu} languages={languages} siteTitle={data.site.siteMetadata.title} />
        <section className="section section-content" role="content">
          <div className='content-bg-botttom'></div>
          <div className="container content-container">
            <div className='content-bg-top'>
              <div className='cow'></div>
            </div>
            <div className="container is-fluid">
              {children()}
            </div>
          </div>
        </section>
        <Contacts />
        <Footer />
        { /* <HashChangeHandler /> */}
      </div>
    </IntlProvider>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const LayoutFragment = graphql`
  fragment LayoutFragment on RootQueryType {
    site {
      siteMetadata {
        title
        languages {
          defaultLangKey
          langs
          langKeys
          languages {
            key
            label
            default
            dir
            flagIconCode
          }
        }
      }
    }
  }
`

export const BgImageFragment = graphql`
  fragment BgImageFragment on RootQueryType {
    bgImage: imageSharp(id: { regex: "/header-bg-top.png/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
