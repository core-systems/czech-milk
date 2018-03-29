import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
/*
const MainTitleRed = styled.span`
  color: #df3036;
  font-size: 40pt;
  font-weight: 100 !important;
`
const MainTitleBlue = styled.span`
  color: #1070b8;
  font-size: 50pt;
  font-weight: 600 !important;
`
*/

const HeroBody = (props) => (
  <div className="hero-body">
    <div className="container">
      <div className="columns">
        <div className="column is-8 is-offset-2 is-10-tablet is-offset-1-tablet has-text-centered">
          <p className="title">
            <span className="title-red">TO NEJLEPŠÍ</span>
            <span className="title-blue"> Z&nbsp;ČESKÉHO<br /> MLÉKA</span>
            <span className="title-red"> PRO EXPORT</span>
          </p>
          <p className="subtitle">
            Výrobky společnosti MEDETA jsou známé tou nejvyšší evropskou kvalitou
            ve zpracování mléka. Nabízíme výrobky značky Lipánek, vhodné
            pro děti od 12 měsíců, i kvalitní Jihočeské mléka od lokálních výrobců.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default HeroBody
