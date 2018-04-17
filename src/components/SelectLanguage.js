import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FormattedMessage, injectIntl, intlShape, FormattedRelative } from 'react-intl'

const SelectLanguage = (props) => {
  console.log('Select lang', props)
  const links = props.langs.map(lang =>
    <Link to={lang.link} key={lang.langKey} className={`navbar-item ${(props.intl.locale === lang.langKey ? 'is-active' : '')}`}>
      <span className={`flag-icon flag-icon-${props.languages.find(x => x.key === lang.langKey).flagIconCode}`}></span>
      <FormattedMessage id={lang.langKey} defaultMessage='LangKey' description='LangKey' />
    </Link>
  )

  return (
    <div className="navbar-item has-dropdown is-hoverable lang-switcher">
      <a className="navbar-link" title={props.intl.messages.selectLanguage}>
        <span className={`flag-icon flag-icon-${props.languages.find(x => x.key === props.intl.locale).flagIconCode}`}></span>
        <FormattedMessage id={props.intl.locale} defaultMessage='CurrentLangName' description='CurrentLangName' />
      </a>
      <div className="navbar-dropdown is-boxed0 is-inverted0 is-outlined0">
        {links}
      </div>
    </div>
  )
}

SelectLanguage.propTypes = {
  intl: intlShape.isRequired,

  languages: PropTypes.array.isRequired,
  langs: PropTypes.array.isRequired,
}

export default injectIntl(SelectLanguage)
