import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { IntlProvider } from 'react-intl'
import 'intl'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './all.sass'

const TemplateWrapper = ({ children, data, location, i18nMessages }) => {
  const url = location.pathname
  const { langs, defaultLangKey, languages, langKeys } = data.site.siteMetadata.languages
  const langKey = getCurrentLangKey(langKeys, defaultLangKey, url)
  const homeLink = `/${langKey}/`
  const langsMenu = getLangs(langKeys, langKey, getUrlForLang(homeLink, url))

  console.log('data.site.siteMetadata', data.site.siteMetadata.languages)

  return (
    <IntlProvider
      locale={langKey}
      //key={langKey}
      defaultLocale={defaultLangKey}
      messages={i18nMessages}
    >
      <div className='is-fullwidth'>
        <Helmet
          title={`${data.site.siteMetadata.title}`}
          meta={[
            { name: 'charset', content: 'UTF-8' },
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          htmlAttributes={{
              lang: `${langKey}`,
          }}
          bodyAttributes={{
              class: `lang-${langKey}`,
              lang: `${langKey}`,
          }}
        >
        </Helmet>
        <Header langs={langsMenu} languages={languages} />
        <section className="section section-content" role="content">
          <div className='content-bg-botttom'></div>
          {/*
            <div className="columns">
              <div className="column">
                {children()}
              </div>
            </div>
          */}
          {/*
            <div className="container content-container0">
              {children()}
            </div>
          */}
          <div className="columns">
            <div className="column">
              <div className="container content-container">
                <div className='content-bg-top'></div>
                {children()}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </IntlProvider>
  );
};

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
          }
        }
      }
    }
  }
`
