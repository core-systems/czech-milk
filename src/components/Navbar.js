import React from 'react'
import Link from 'gatsby-link'

import SelectLanguage from './SelectLanguage';
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = (props) => (
  <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
    <div className="container">

      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </figure>
        </Link>
        <div class="navbar-burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenu" class="navbar-menu">
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

          <div class="navbar-item is-hoverable">
            <div class="field is-grouped">
              <p class="control">
                <a class="button">
                  <span class="icon">
                    <i class="fab fa-twitter" aria-hidden="true"></i>
                  </span>
                  <span>Tweet</span>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary">
                  <span class="icon">
                    <i class="fas fa-download" aria-hidden="true"></i>
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
