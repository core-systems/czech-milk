import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FormattedMessage, injectIntl, intlShape, FormattedRelative } from 'react-intl'

const IntLink = (props) => {
  //const to = `/${props.intl.locale}${props.to}`
  const to = props.to
  //console.log('IntLink', props, linkTo)
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
