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
  const actualLang = languages.find(x => x.key === langKey)
  const homeLink = `/${actualLang.key}/`
  const langsMenu = getLangs(langKeys, actualLang.key, getUrlForLang(homeLink, url))

  console.log('actualLang', actualLang)

  return (
    <IntlProvider
      locale={actualLang.key}
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
              lang: `${actualLang.key}`,
              dir: `${actualLang.dir}`,
          }}
          bodyAttributes={{
              class: `lang-${actualLang.key}`,
          }}
        >
        </Helmet>
        <Header langs={langsMenu} languages={languages} />
        <section className="section section-content" role="content">
          <div className='content-bg-botttom'></div>
          <div className="columns">
            <div className="column">
              <div className="container content-container">
                {children()}
                <div className='content-bg-top'>
                  <div className='cow'></div>
                </div>
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
            dir
          }
        }
      }
    }
  }
`
