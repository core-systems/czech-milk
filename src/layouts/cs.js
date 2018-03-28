import React from 'react';
import graphql from 'graphql';
import Layout from './index';
import { addLocaleData } from 'react-intl';

import messages from '../data/messages/cs';
import cs from 'react-intl/locale-data/cs';
import 'intl/locale-data/jsonp/cs';

addLocaleData(cs);

export default (props) => (
  <Layout
    {...props}
    i18nMessages={messages}
  />
)

export const pageQuery = graphql`
  query LayoutCs {
    site {
      siteMetadata {
        title
        languages {
          defaultLangKey
          langs
          langKeys
          languages {
            key
            label
            default
          }
        }
      }
    }
  }
`;
