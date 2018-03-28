import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'

import Navbar from '../components/Navbar'
import SelectLanguage from './SelectLanguage';

import logo from '../img/logo.svg'
import cz from '../img/cz.svg'
import eu from '../img/eu.svg'

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
  <section className="hero">
    <div className="hero-head">
      <div className="container">
        <Navbar langs={props.langs} />
      </div>
    </div>

    <div className="hero-body">
      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth has-text-centered">
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
        <div className="flags-cs-eu">
            <figure>
              <img src={cz} alt="CZ" width="70px" height="70px" className="is-pulled-left" style={{ width: '70px', height: '70px', maxHeight: '70px' }} />
              <img src={eu} alt="EU" width="70px" height="70px" className="is-pulled-left" style={{ width: '70px', height: '70px', maxHeight: '70px', marginLeft: '1.5rem' }} />
            </figure>
        </div>
    </div>
  </section>
)

export default Header
