import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'

import cz from '../img/cz.svg'
import eu from '../img/eu.svg'

const Flag = styled.img`
  width: 70px;
  height: 70px;
  max-height: 70px;
  ${props => !props.first && css`
      margin-left: 1.5rem;
  `}
`

const Flags = (props) => (
    <div className="flags-cs-eu">
        <figure>
          <Flag src={cz} alt="CZ" className="is-pulled-left" first />
          <Flag src={eu} alt="EU" className="is-pulled-left" />
        </figure>
    </div>
)

export default Flags
