import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'

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

const HeroBody = (props) => (
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
)

export default HeroBody
