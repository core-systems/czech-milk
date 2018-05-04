// @flow

import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'

const BgImage = styled(Image)`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${props => props.height || 'auto'};

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    //min-width:100%;
    min-height:100%;
    //min-width:2000px;
    //min-height:1421px;
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
    font-family: 'object-fit: ${props => props.fit || 'cover'} !important; object-position: ${props => props.position || '50% 50%'} !important;'
  }
`

export default BgImage
