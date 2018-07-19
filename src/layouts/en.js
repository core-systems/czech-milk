import React from 'react'
import graphql from 'graphql'
import { addLocaleData } from 'react-intl'
import Layout, { LayoutFragment, BgImageFragment } from './index'

import messages from '../data/messages/en'
import en from 'react-intl/locale-data/en'
import 'intl/locale-data/jsonp/en'

addLocaleData(en)

export default props => <Layout {...props} i18nMessages={messages} />

export const pageQuery = graphql`
  query LayoutEn {
    ...BgImageFragment
    ...LayoutFragment
  }
`
