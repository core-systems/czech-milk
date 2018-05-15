import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FormattedMessage, injectIntl, intlShape, FormattedRelative } from 'react-intl'

const Footer = (props) => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered0">
        <p>
          <FormattedMessage id="All Rights Reserved" /> &reg;&nbsp;{props.year} | <a href="https://core.cz/">Core Systems s.r.o.</a> | Certification ISO 27001
        </p>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  intl: intlShape.isRequired,
  year: PropTypes.string.isRequired,
}

Footer.defaultProps = {
  year: `${(new Date()).getFullYear()}`,
}

export default injectIntl(Footer)
