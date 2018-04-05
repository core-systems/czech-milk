import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FormattedMessage, injectIntl, intlShape, FormattedRelative } from 'react-intl'

const SelectLanguage = (props) => {
  console.log('SelectLanguage', props)
  const links = props.langs.map(lang =>
    <Link to={lang.link} key={lang.langKey} className={`navbar-item ${(props.intl.locale === lang.langKey ? 'is-active' : '')}`}>
      <FormattedMessage id={lang.langKey} defaultMessage='LangKey' description='LangKey' />
    </Link>
  )

  return (
    <div className="navbar-item has-dropdown is-hoverable lang-switcher">
      <a className="navbar-link" title={props.intl.messages.selectLanguage}>
        <FormattedMessage id={props.intl.locale} defaultMessage='CurrentLangName' description='CurrentLangName' />
      </a>
      <div className="navbar-dropdown is-boxed0 is-inverted0 is-outlined0">
        {links}
      </div>

      {/*
        <div class="field is-grouped">
          <p class="control">
            <a class="button">
              <span class="icon">
                <i class="fab fa-twitter" aria-hidden="true"></i>
              </span>
              <span>Tweet</span>
            </a>
          </p>
          <p class="control">
            <a class="button is-primary">
              <span class="icon">
                <i class="fas fa-download" aria-hidden="true"></i>
              </span>
              <span>Download</span>
            </a>
          </p>
        </div>

        <div className="field">
          <p className="control has-icons-left">
            <span className="select">
              <select style={{ backgroundColor: 'transparent' }}>
                <option selected>Country</option>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </span>
            <span className="icon is-small is-left">
              <i className="fas fa-globe"></i>
            </span>
          </p>
        </div>
      */}
    </div>
  )
}

SelectLanguage.propTypes = {
  langs: PropTypes.array,
  intl: intlShape.isRequired,
}

export default injectIntl(SelectLanguage)
