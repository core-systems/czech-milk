import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FormattedMessage, injectIntl, intlShape, FormattedRelative } from 'react-intl'

const SelectLanguage = (props) => {
  const links = props.langs.map(lang =>
    <Link to={lang.link} key={lang.langKey} className="navbar-item">
      <li selected={lang.selected}>
        {lang.langKey}
      </li>
    </Link>
  )
  //<FormattedMessage id="selectLanguage" />
  console.log(props.intl)
  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <a className="navbar-link" title={props.intl.messages.selectLanguage}>
        {props.intl.locale}
      </a>

      <div className="navbar-dropdown is-boxed">
        <a className="navbar-item">
          Overview
        </a>
        <a className="navbar-item">
          Elements
        </a>
        <a className="navbar-item">
          Components
        </a>
        <hr className="navbar-divider" />
        <div className="navbar-item">
          Version 0.6.2
        </div>
      </div>
      {links}
    </div>
  )
}

SelectLanguage.propTypes = {
  langs: PropTypes.array,
  intl: intlShape.isRequired,
}

export default injectIntl(SelectLanguage);
