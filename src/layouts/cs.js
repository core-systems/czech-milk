import React from 'react'
import graphql from 'graphql'
import { addLocaleData } from 'react-intl'
import Layout, { LayoutFragment, BgImageFragment } from './index'

import messages from '../data/messages/cs'
import cs from 'react-intl/locale-data/cs'
import 'intl/locale-data/jsonp/cs'

addLocaleData(cs)

export default (props) => (
  <Layout
    {...props}
    i18nMessages={messages}
  />
)

export const pageQuery = graphql`
  query LayoutCs {
    ...BgImageFragment
    ...LayoutFragment
  }
`
