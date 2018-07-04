import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import { FormattedMessage, FormattedHTMLMessage, injectIntl, intlShape } from 'react-intl'
import styled, { css } from 'styled-components'
/*
const MainTitleRed = styled.span`
  color: #df3036;
  font-size: 40pt;
  font-weight: 100 !important;
`
const MainTitleBlue = styled.span`
  color: #1070b8;
  font-size: 50pt;
  font-weight: 600 !important;
`
*/

function isAboutPage() {
    if (window.location.href.includes('about')) return true;
    return false;
}

const HeroBody = (props) => (
  <div className="hero-body">
    <div className="container">
      <div className="columns">
        <div className="column is-8 is-offset-2 is-10-tablet is-offset-1-tablet has-text-centered">
          <p className="title" dangerouslySetInnerHTML={{__html: props.intl.formatHTMLMessage({ id: 'site.hero.title'}) }} />
          <FormattedMessage id="site.hero.subtitle">
            {(txt) => (
              <p className="subtitle">
                {txt}
              </p>
            )}
          </FormattedMessage>
          {
            !isAboutPage()
            ? (
              <div className="hero-more">
                <a href="#all" className="button is-large is-inverted is-outlined is-rounded" data-scroll>
                  <span>
                    <span><FormattedMessage id="site.hero.more" /></span>
                  </span>
                  <span className="icon is-large">
                    <i className="fas fa-arrow-down"></i>
                  </span>
                </a>
              </div>
            )
            : null
          }
        </div>
      </div>
    </div>
  </div>
)

HeroBody.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(HeroBody)
