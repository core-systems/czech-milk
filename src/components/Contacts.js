import React from 'react'
import { FormattedMessage, injectIntl, intlShape, FormattedRelative } from 'react-intl'

import Link from './Link'
import ContactForm from './ContactForm'

import madeta from '../img/madeta-logo.png'
import core from '../img/core-logo.png'

const MadetaLogo = () => (
  <figure className="image0">
    <img src={madeta} alt={'Madeta'} width={99} height={36} />
  </figure>
)

const CoreLogo = () => (
  <figure className="image0">
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
            <ContactForm topic="Contact - footer" />
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
              Česká Republika
            </p>
            <p>
              <a href="https://www.madeta.cz/">www.madeta.cz</a>
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
              Česká Republika
            </p>
            <p>
              <a href="https://www.czechmilk.com/">www.czechmilk.com</a>
            </p>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </div>
  </section>
)

Contacts.propTypes = {
  //intl: intlShape.isRequired,
}

export default Contacts
//export default injectIntl(Contacts)
