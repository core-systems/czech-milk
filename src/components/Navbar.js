import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix } from 'gatsby-link'
import {
  FormattedMessage,
  injectIntl,
  intlShape,
  FormattedRelative,
} from 'react-intl'

import Link from './Link'
import SelectLanguage from './SelectLanguage'
//import logo from '../img/logo.svg'
const logo = withPrefix('/svg/logo.svg')

const Navbar = props => (
  <nav
    className="navbar is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <figure className="image">
          <img
            src={logo}
            alt={props.siteTitle}
            style={{ width: 870.1, height: 541.8 }}
          />
        </figure>
      </Link>
      <div className="navbar-burger" data-target="navMenu">
        <span />
        <span />
        <span />
      </div>
    </div>

    <div id="navMenu" className="navbar-menu">
      <div className="navbar-end">
        <Link
          className="navbar-item"
          activeClassName="is-active"
          to="/products#all"
          data-scroll
        >
          <FormattedMessage id="nav.products" />
        </Link>
        <Link
          className="navbar-item"
          activeClassName="is-active"
          to="/about#us"
          data-scroll
        >
          <FormattedMessage id="nav.about" />
        </Link>
        <SelectLanguage langs={props.langs} languages={props.languages} />
      </div>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
  langs: PropTypes.array.isRequired,
}

export default Navbar

export const navbarFragment = graphql`
  fragment NavbarFragment on RootQueryType {
    site {
      siteMetadata {
        title
        languages {
          defaultLangKey
          langs
          langKeys
          languages {
            key
            label
            default
            dir
            flagIconCode
          }
        }
      }
    }
  }
`
