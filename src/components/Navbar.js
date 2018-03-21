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

          <a
            className="navbar-item"
            href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <img src={github} alt="Github" />
            </span>
          </a>

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

          <div class="navbar-item has-dropdown">
            <a class="navbar-link">
              Docs
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                Overview
              </a>
            </div>
          </div>

          <div class="dropdown is-active">
            <div class="dropdown-trigger">
              <button class="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                <span>Content</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu2" role="menu">
              <div class="dropdown-content">
                <div class="dropdown-item">
                  <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                </div>
                <hr class="dropdown-divider" />
                <div class="dropdown-item">
                  <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
                </div>
                <hr class="dropdown-divider" />
                <a href="#" class="dropdown-item">
                  This is a link
                </a>
              </div>
            </div>
          </div>

        </div>

        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-active">
            <a class="navbar-link">
              Right
            </a>

            <div class="navbar-dropdown is-right">
              <a class="navbar-item">
                Overview
              </a>
              <a class="navbar-item">
                Elements
              </a>
              <a class="navbar-item">
                Components
              </a>
              <hr class="navbar-divider" />
              <div class="navbar-item">
                Version 0.6.2
              </div>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Docs
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                Overview
              </a>
              <a class="navbar-item">
                Elements
              </a>
              <a class="navbar-item">
                Components
              </a>
              <hr class="navbar-divider" />
              <div class="navbar-item">
                Version 0.6.2
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </nav>
)

export default Navbar
