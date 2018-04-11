import React from 'react'
import { FormattedMessage, injectIntl, intlShape, FormattedRelative } from 'react-intl'

import Link from './Link'

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

            <form action="#form:contact-us" method="post" target="_blank" accept-charset="UTF-8"  autocomplete="off" >
              <div className="field is-grouped">
                <div className="control has-icons-left has-icons-right is-expanded">
                  <input name="name" className="input" type="name" placeholder={props.intl.formatMessage({ id :'form.contactUs.name.placeholder' })} aria-label="add full name" required />
                  <span className="icon is-left">
                    <i className="fas fa-user"></i>
                  </span>
                  <span className="icon is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </div>

                <div className="control has-icons-left has-icons-right is-expanded">
                  <input name="email" className="input" type="email" placeholder={props.intl.formatMessage({ id :'form.contactUs.email.placeholder' })} aria-label="add e-mail" required />
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
                  <textarea name="message" className="textarea" placeholder={props.intl.formatMessage({ id :'form.contactUs.message.placeholder' })} aria-label="add messagee" required></textarea>
                </div>
              </div>

              <div class="field is-grouped">
                <p class="control">
                  <button class="button is-primary">
                    <FormattedMessage id="form.send" />
                  </button>
                </p>
                <p class="control">
                  <input className="button is-primary" type="submit" value={props.intl.formatMessage({ id :'form.send' })} accesskey="s" disabled />
                </p>
                <p class="control">
                  <input className="button is-light" type="reset" value={props.intl.formatMessage({ id :'form.reset' })} accesskey="r" disabled />
                </p>
              </div>

            </form>
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
  intl: intlShape.isRequired,
}

export default injectIntl(Contacts)
