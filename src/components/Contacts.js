import React from 'react'
import { FormattedMessage, injectIntl, intlShape, FormattedRelative } from 'react-intl'

import Link from './Link'
import ContactForm from './ContactForm'

import madeta from '../img/madeta-logo.png'
import core from '../img/core-logo.png'

const MadetaLogo = () => (
  <figure>
    <img src={madeta} alt={'Madeta'} width={99} height={36} />
  </figure>
)

const CoreLogo = () => (
  <figure>
    <img src={core} alt={'Core Systems'} width={66} height={42} />
  </figure>
)

const Contacts = (props) => (
  <section className="section section-contact-us" role="contacts-us">
    <div className="container ">
      <div className="columns">
        <div className="column is-6-tablet is-5-desktop is-4-widescreen is-offset-1-desktop">
          <div className="content is-small">
            <h2><FormattedMessage id="form.contactUs.title" /></h2>
            <ContactForm topic={`[${props.intl.locale.toUpperCase()}] Contact - Footer`} />
          </div>
        </div>
        <div className="column is-3-tablet is-3-desktop is-2-fullhd has-dotted-right-border has-dotted-bottom-border-mobile">
          <div className="content has-text-centered">
            <MadetaLogo />
            <FormattedMessage id="producer">
              {(txt) => (
                <p className="is-size-5">
                  {txt}
                </p>
              )}
            </FormattedMessage>
            <p className="is-size-6">
              MADETA a.s.<br />
              Rudolfovská 246/83<br />
              370 50 České Budějovice<br />
              <FormattedMessage id="czech.country" />
            </p>
            <p>
              <a href="http://www.madeta.cz/" target="_blank">www.madeta.cz</a>
            </p>
          </div>
        </div>
        <div className="column is-3-tablet is-3-desktop is-2-fullhd">
          <div className="content has-text-centered">
            <CoreLogo />
            <FormattedMessage id="exporter">
              {(txt) => (
                <p className="is-size-5">
                  {txt}
                </p>
              )}
            </FormattedMessage>
            <p className="is-size-6">
              CORE SYSTEMS s.r.o.<br />
              Bechlinská 705/2<br />
              190 00 Praha 9<br />
              <FormattedMessage id="czech.country" />
            </p>
            <p>
              {
                props.intl.locale == 'cs' ? <a href="http://www.core.cz/" target="_blank">www.core.cz</a> : <a href="http://www.core.cz/en" target="_blank">www.core.cz/en</a>
              }
            </p>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </div>
  </section>
)

Contacts.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(Contacts)
