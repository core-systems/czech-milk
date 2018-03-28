import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'

import cz from '../img/cz.svg'
import eu from '../img/eu.svg'

/*
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
*/

const Flags = (props) => (
    <div className="flags-cs-eu">
        <figure>
          <img src={cz} alt="CZ" width="70px" height="70px" className="is-pulled-left" style={{ width: '70px', height: '70px', maxHeight: '70px' }} />
          <img src={eu} alt="EU" width="70px" height="70px" className="is-pulled-left" style={{ width: '70px', height: '70px', maxHeight: '70px', marginLeft: '1.5rem' }} />
        </figure>
    </div>
)

export default Flags
