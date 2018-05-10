import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Image from 'gatsby-image'
import { FormattedMessage, injectIntl, intlShape, FormattedRelative } from 'react-intl'
import styled from 'styled-components'

const Flag = styled.img`
  position: relative;
  display: inline-block;
  width: ${props => `${((4 / 3) * 1)}em`};
  //line-height: 1em;
  margin-right: .5em;
  vertical-align: middle;
`

const SelectLanguage = (props) => {
  const flags = []
  props.langs.forEach(lang => flags[lang.langKey] = require(`flag-icon-css/flags/4x3/${props.languages.find(x => x.key === lang.langKey).flagIconCode}.svg`))
  //console.log('Select lang', flags)

  const links = props.langs.map(lang =>
    <Link to={lang.link} key={lang.langKey} className={`navbar-item ${(props.intl.locale === lang.langKey ? 'is-active' : '')}`}>
      {/*<span className={`flag-icon flag-icon-${props.languages.find(x => x.key === lang.langKey).flagIconCode}`}></span>*/}
      <Flag src={flags[lang.langKey]} />
      <FormattedMessage id={lang.langKey} defaultMessage='LangKey' description='LangKey' />
    </Link>
  )

  return (
    <div className="navbar-item has-dropdown is-hoverable lang-switcher">
      <a className="navbar-link" title={props.intl.messages.selectLanguage}>
        {/*<span className={`flag-icon flag-icon-${props.languages.find(x => x.key === props.intl.locale).flagIconCode}`}></span>*/}
        <Flag src={flags[props.intl.locale]} style={{ marginTop: `-3px` }} />
        <FormattedMessage id={props.intl.locale} defaultMessage='CurrentLangName' description='CurrentLangName' />
      </a>
      <div className="navbar-dropdown">
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
