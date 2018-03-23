import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { IntlProvider } from 'react-intl'
import 'intl'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import './all.sass'

const TemplateWrapper = ({ children, data, location, i18nMessages }) => {
  const url = location.pathname;
  const { langs, defaultLangKey, languages, langKeys } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langKeys, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langKeys, langKey, getUrlForLang(homeLink, url));

  console.log('data.site.siteMetadata.languages', data.site.siteMetadata.languages)

  return (
    <IntlProvider
      locale={langKey}
      messages={i18nMessages}
    >
      <div class='is-fullwidth'>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header langs={langsMenu} languages={languages} />
        <section className="section">
          <div className="columns">
            <div className="column">
              {children()}
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
