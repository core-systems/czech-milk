import React from 'react'
import graphql from 'graphql'
import { addLocaleData } from 'react-intl'
import Layout, { LayoutFragment, BgImageFragment } from './index'

import messages from '../data/messages/fr'
import fr from 'react-intl/locale-data/fr'
import 'intl/locale-data/jsonp/fr'

addLocaleData(fr)

export default props => <Layout {...props} i18nMessages={messages} />

export const pageQuery = graphql`
  query LayoutFr {
    ...BgImageFragment
    ...LayoutFragment
  }
`
