import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape, FormattedRelative } from 'react-intl'

import Link from './Link'

const ContactForm = ({
  intl,
  topic,
}) => (
  <form action="#form:contact-us" method="post" target="_blank" acceptCharset="UTF-8"  autoComplete="off" >
    <div className="field is-grouped">
      <div className="control has-icons-left has-icons-right is-expanded">
        <input name="name" className="input" type="name" placeholder={intl.formatMessage({ id :'form.contactUs.name.placeholder' })} aria-label="add full name" required />
        <span className="icon is-left">
          <i className="fas fa-user"></i>
        </span>
        <span className="icon is-right">
          <i className="fas fa-check"></i>
        </span>
      </div>

      <div className="control has-icons-left has-icons-right is-expanded">
        <input name="email" className="input" type="email" placeholder={intl.formatMessage({ id :'form.contactUs.email.placeholder' })} aria-label="add e-mail" required />
        <span className="icon is-left">
          <i className="fas fa-envelope"></i>
        </span>
        <span className="icon is-right">
          <i className="fas fa-check"></i>
        </span>
      </div>
    </div>

    <div className="field has-addons">
      <div className="control is-expanded">
        <textarea name="message" className="textarea" placeholder={intl.formatMessage({ id :'form.contactUs.message.placeholder' })} aria-label="add messagee" required></textarea>
      </div>
    </div>

    <div className="field is-grouped0">
      <p className="control is-pulled-right">
        <button className="button">
          <FormattedMessage id="form.send" />
        </button>
      </p>
    </div>
  </form>
)

ContactForm.propTypes = {
  intl: intlShape.isRequired,

  topic: PropTypes.string.isRequired,
}

export default injectIntl(ContactForm)
