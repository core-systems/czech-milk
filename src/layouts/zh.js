import React from 'react'
import graphql from 'graphql'
import { addLocaleData } from 'react-intl'
import Layout, { LayoutFragment, BgImageFragment } from './index'

import messages from '../data/messages/zh'
import zh from 'react-intl/locale-data/zh'
import 'intl/locale-data/jsonp/zh'

addLocaleData(zh)

export default (props) => (
  <Layout
    {...props}
    i18nMessages={messages}
  />
)

export const pageQuery = graphql`
  query LayoutZh {
    ...BgImageFragment
    ...LayoutFragment
  }
`
