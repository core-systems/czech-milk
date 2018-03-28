import React from 'react'
import Link from 'gatsby-link'

import SelectLanguage from './SelectLanguage';
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = (props) => (
  <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <figure className="image">
          <img src={logo} alt="Kaldi" />
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
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </div>

      <div className="navbar-end">
        <SelectLanguage langs={props.langs} />
      </div>
    </div>
  </nav>
)

export default Navbar
