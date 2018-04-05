import React from 'react'
import PropTypes from 'prop-types'
//import Link from 'gatsby-link'
import { FormattedMessage, injectIntl, intlShape, FormattedRelative } from 'react-intl'

import Link from './Link'
import SelectLanguage from './SelectLanguage';
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = (props) => (
  <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <figure className="image">
          <img src={logo} alt={props.siteTitle} />
        </figure>
      </Link>
      <div className="navbar-burger" data-target="navMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navMenu" className="navbar-menu">
      <div className="navbar-end">
        <Link className="navbar-item" to="/about">
          <FormattedMessage id='nav.about' />
        </Link>
        <Link className="navbar-item" to="/products">
          <FormattedMessage id='nav.products' />
        </Link>
        <SelectLanguage langs={props.langs} />
      </div>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Navbar

export const navbarFragment = graphql`
  fragment NavbarFragment on RootQueryType {
    site {
      siteMetadata {
        title
      }
    }
  }
`
