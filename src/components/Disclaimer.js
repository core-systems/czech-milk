import React from 'react'
import PropTypes from 'prop-types'
import {
  FormattedMessage,
  injectIntl,
  intlShape,
  FormattedRelative,
} from 'react-intl'

import Link from './Link'

const Disclaimer = ({ intl }) => (
  <React.Fragment>
    <p className="help">
      <FormattedMessage id="form.disclaimer.GDPR" />
    </p>
  </React.Fragment>
)

Disclaimer.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(Disclaimer)
