import React from 'react'
import PropTypes from 'prop-types'
import {
  FormattedMessage,
  injectIntl,
  intlShape,
  FormattedRelative,
} from 'react-intl'

const ProductInfo = ({ info, isRight }) => (
  <div className="columns product-table">
    <div
      className={`column is-12 is-10-widescreen is-8-fullhd ${
        isRight ? '' : 'is-offset-2-widescreen is-offset-4-fullhd'
      }`}
    >
      <div className="content is-medium0">
        <table>
          <thead className="is-hidden">
            <tr>
              <th>
                <FormattedMessage id="property" />
              </th>
              <th>
                <FormattedMessage id="value" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <FormattedMessage id="product.name" />
              </td>
              <td>{info.name}</td>
            </tr>
            <tr>
              <td>
                <FormattedMessage id="product.expire" />
              </td>
              <td>{info.expire}</td>
            </tr>
            <tr>
              <td>
                <FormattedMessage id="product.packageWeight" />
              </td>
              <td>{info.packageWeight}</td>
            </tr>
            <tr>
              <td>
                <FormattedMessage id="product.packageSize" />
              </td>
              <td>{info.packageSize}</td>
            </tr>
            <tr>
              <td>
                <FormattedMessage id="product.code" />
              </td>
              <td>{info.code}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

ProductInfo.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    expire: PropTypes.string.isRequired,
    packageWeight: PropTypes.string.isRequired,
    packageSize: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,
  isRight: PropTypes.bool.isRequired,
}

export default ProductInfo
