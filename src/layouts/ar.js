import React from 'react'
import graphql from 'graphql'
import { addLocaleData } from 'react-intl'
import Layout, { LayoutFragment, BgImageFragment } from './index'

import messages from '../data/messages/ar'
import ar from 'react-intl/locale-data/ar'
import 'intl/locale-data/jsonp/ar'

addLocaleData(ar)

export default (props) => (
  <Layout
    {...props}
    i18nMessages={messages}
  />
)

export const pageQuery = graphql`
  query LayoutAr {
    ...BgImageFragment
    ...LayoutFragment
  }
`
