import React from 'react'
import graphql from 'graphql'
import { addLocaleData } from 'react-intl'
import Layout, { LayoutFragment, BgImageFragment } from './index'

import messages from '../data/messages/vi'
import vi from 'react-intl/locale-data/vi'
import 'intl/locale-data/jsonp/vi'

addLocaleData(vi)

export default props => <Layout {...props} i18nMessages={messages} />

export const pageQuery = graphql`
  query LayoutVi {
    ...BgImageFragment
    ...LayoutFragment
  }
`
