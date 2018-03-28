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
  //console.log(props.intl)
  //    {/*<nav class="navbar" role="navigation" aria-label="dropdown navigation">*/}
  return (
    <div className="navbar-item has-dropdown is-hoverable0 lang-switcher">
      <div class="navbar-item">
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
      </div>

      <div className="field">
        <p className="control has-icons-left">
          <span className="select">
            <select>
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

      <div className="control has-icons-left">
        <div className="select is-medium">
          <select>
            <option selected>Country</option>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
        <span className="icon is-medium is-left">
          <i className="fas fa-globe"></i>
        </span>
      </div>

      <a className="navbar-link" title={props.intl.messages.selectLanguage}>
        {props.intl.locale}
      </a>

      <div className="navbar-dropdown is-boxed0 is-inverted0 is-outlined0">
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
