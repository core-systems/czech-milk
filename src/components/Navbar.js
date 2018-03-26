import React from 'react'
import Link from 'gatsby-link'

import SelectLanguage from './SelectLanguage';
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = (props) => (
  <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
    <div className="container">

      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </figure>
        </Link>
        <div className="navbar-burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenu" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <Link className="navbar-item" to="/products">
            Products
          </Link>
        </div>

        <div className="navbar-end">
          <SelectLanguage langs={props.langs} />

          <div className="navbar-item is-hoverable">
            <div className="field is-grouped">
              <p className="control">
                <a className="button">
                  <span className="icon">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </span>
                  <span>Tweet</span>
                </a>
              </p>
              <p className="control">
                <a className="button is-primary">
                  <span className="icon">
                    <i className="fas fa-download" aria-hidden="true"></i>
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
