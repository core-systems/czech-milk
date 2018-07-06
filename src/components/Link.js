import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { injectIntl } from 'react-intl'
//import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'

const IntLink = props => {
  const to = `/${props.intl.locale}${props.to}`
  //console.log('IntLink', props, to)
  //const to = props.to
  //const url = props.location.pathname
  //const homeLink = `/${props.intl.locale}/`
  //const langsMenu = getLangs(langKeys, actualLang.key, getUrlForLang(homeLink, url))
  //const url = getUrlForLang(homeLink, to, props.intl.locale)
  //  console.log('IntLink', props, props.intl.locale, to, url)
  return (
    <Link {...props} to={to}>
      {props.children}
    </Link>
  )
}

IntLink.propTypes = {
  ...Link.propTypes,
}

export default injectIntl(IntLink)
