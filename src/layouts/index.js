import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { IntlProvider } from 'react-intl'
import 'intl'

import Header from '../components/Header'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'

import '../styles/all.sass'

const TemplateWrapper = ({ children, data, location, locale, i18nMessages }) => {
  const url = location.pathname
  const { langs, defaultLangKey, languages, langKeys } = data.site.siteMetadata.languages
  const langKey = getCurrentLangKey(langKeys, defaultLangKey, url)
  const actualLang = languages.find(x => x.key === langKey)
  const homeLink = `/${actualLang.key}/`
  const langsMenu = getLangs(langKeys, actualLang.key, getUrlForLang(homeLink, url))

  console.log('actualLang', actualLang)

  function Fragment(props) {
    console.log('fragment', props)
    return props.children || <span {...props} /> || <React.Fragment {...props} /> || null
  }

  return (
    <IntlProvider
      locale={actualLang.key}
      //key={actualLang.key}
      defaultLocale={defaultLangKey}
      messages={i18nMessages}
      //textComponent={React.Fragment}
    >
      <div className='is-fullwidth'>
        <Helmet
          defaultTitle={`Home | ${data.site.siteMetadata.title}`}
          titleTemplate={"%s | " + `${data.site.siteMetadata.title}`}
          meta={[
            { name: 'charset', content: 'UTF-8' },
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          htmlAttributes={{
              lang: `${actualLang.key}`,
              dir: `${actualLang.dir}`,
          }}
          bodyAttributes={{
              class: `lang-${actualLang.key}`,
          }}
        >
            {/*<title itemProp="name" lang={`${actualLang.key}`}>{`${data.site.siteMetadata.title}`}</title>*/}
        </Helmet>
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
      </div>
    </IntlProvider>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const pageQuery = graphql`
  query Layout {
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
          }
        }
      }
    }
  }
`
