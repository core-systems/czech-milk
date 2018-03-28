import React from 'react'
import Link from 'gatsby-link'

import Navbar from './Navbar'
import SelectLanguage from './SelectLanguage';
import HeroBody from './HeroBody'
import Flags from './Flags'

const Header = (props) => (
  <section className="hero">
    <div className="hero-head">
      <div className="container">
        <Navbar langs={props.langs} />
      </div>
    </div>

    <HeroBody />

    <div className="hero-foot">
        <Flags />
    </div>
  </section>
)

export default Header
