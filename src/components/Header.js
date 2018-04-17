import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Navbar from './Navbar'
import SelectLanguage from './SelectLanguage';
import HeroBody from './HeroBody'
import Flags from './Flags'

const Header = (props) => (
  <section className="hero">
    <div className="hero-head">
      <div className="container">
        <Navbar langs={props.langs} languages={props.languages} siteTitle={props.siteTitle} />
      </div>
    </div>

    <HeroBody />

    <div className="hero-foot">
        <Flags />
    </div>
  </section>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
  langs: PropTypes.array.isRequired,
}

export default Header
