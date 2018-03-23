import React from 'react'
import Link from 'gatsby-link'

import Navbar from '../components/Navbar'
import SelectLanguage from './SelectLanguage';

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Header = (props) => (
  <section class="hero is-info0 is-large">
    <div class="hero-head">
      <nav class="navbar is-transparent0">
        <div class="container">
          <div class="navbar-brand">
            <Link to="/" className="navbar-item" style={{ position: 'absolute', top: 40, left: 0 }}>
              <figure className="image">
                <img src={logo} alt="Kaldi" width="241px" height="150px" style={{ width: '241px', height: '150px', maxHeight: '150px' }} />
              </figure>
            </Link>
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item is-active">
                Home
              </a>
              <a class="navbar-item">
                Examples
              </a>
              <span class="navbar-item">
                <a class="button is-primary is-inverted is-outlined">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
            </div>
          </div>
          <Navbar langs={props.langs} />
        </div>
      </nav>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">
          TO NEJLEPŠÍ Z ČESKÉHO MLÉKA PRO EXPORT
        </p>
        <p class="subtitle">
          Výrobky společnosti MEDETA jsou známé tou nejvyšší evropskou kvalitou
          ve zpracování mléka. Nabízíme výrobky značky Lipánek, vhodné
          pro děti od 12 měsíců, i kvalitní Jihočeské mléka od lokálních výrobců.
        </p>
      </div>
    </div>

    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li class="is-active">
              <a>Overview</a>
            </li>
            <li>
              <a>Modifiers</a>
            </li>
            <li>
              <a>Grid</a>
            </li>
            <li>
              <a>Elements</a>
            </li>
            <li>
              <a>Components</a>
            </li>
            <li>
              <a>Layout</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
)

export default Header
