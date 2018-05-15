import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape, FormattedRelative } from 'react-intl'

import Link from './Link'
import Disclaimer from './Disclaimer'

const ContactForm = ({
  intl,
  topic,
}) => (
  <React.Fragment>
    <form
      name={`${topic}`}
      method="post"
      action="thank-you"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      acceptCharset="UTF-8"
      autoComplete="off"
    >
      <input type="hidden" name="form-name" value={`${topic}`} />
      <p className="is-hidden">
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </p>
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

      <Disclaimer />

      <div className="field is-grouped is-grouped-right">
        <p className="control">
          <button className="button">
            <FormattedMessage id="form.send" />
          </button>
        </p>
      </div>
    </form>
  </React.Fragment>
)

ContactForm.propTypes = {
  intl: intlShape.isRequired,

  topic: PropTypes.string.isRequired,
}

export default injectIntl(ContactForm)
