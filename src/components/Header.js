import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'

import Navbar from '../components/Navbar'
import SelectLanguage from './SelectLanguage';

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const MainTitleRed = styled.span`
  color: #df3036;
  font-size: 50pt;
  font-weight: 100 !important;
`
const MainTitleBlue = styled.span`
  color: #1070b8;
  font-size: 60pt;
  font-weight: 600 !important;
`

const MainSubTitle = styled.span`
  color: #1070b8;
  font-size: 60pt;
  font-weight: 600 !important;
`

const Header = (props) => (
  <section className="hero is-info0 is-large">
    <div className="hero-head">
      <nav className="navbar is-transparent0">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" style={{ position: 'absolute', top: 40, left: 0 }}>
              <figure className="image">
                <img src={logo} alt="Kaldi" width="241px" height="150px" style={{ width: '241px', height: '150px', maxHeight: '150px' }} />
              </figure>
            </Link>
            <span className="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item is-active">
                Home
              </a>
              <a className="navbar-item">
                Examples
              </a>
              <span className="navbar-item">
                <a className="button is-primary is-inverted is-outlined">
                  <span className="icon">
                    <i className="fab fa-github"></i>
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

    <div className="hero-body">
      <div className="columns is-mobile">
          <div className="column is-half is-offset-one-quarter has-text-centered">
            <p className="title">
              <MainTitleRed>TO NEJLEPŠÍ</MainTitleRed>
              <MainTitleBlue> Z&nbsp;ČESKÉHO<br /> MLÉKA</MainTitleBlue>
              <MainTitleRed> PRO EXPORT</MainTitleRed>
            </p>
            <p className="subtitle">
              Výrobky společnosti MEDETA jsou známé tou nejvyšší evropskou kvalitou
              ve zpracování mléka. Nabízíme výrobky značky Lipánek, vhodné
              pro děti od 12 měsíců, i kvalitní Jihočeské mléka od lokálních výrobců.
            </p>
          </div>
        </div>
    </div>

    <div className="hero-foot">
      <nav className="tabs is-boxed is-fullwidth">
        <div className="container">
          <ul>
            <li className="is-active">
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
