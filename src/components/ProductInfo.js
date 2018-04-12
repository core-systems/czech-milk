import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape, FormattedRelative } from 'react-intl'

const ProductInfo = ({
  productName,
  productExpire,
  productPackageWeight,
  productPackageSize,
  productCode,
  isRight,
}) => (
  <div className="columns product-table">
    <div className={`column is-8 ${isRight ? '' : 'is-offset-4-widescreen'}`}>
      <div className="content is-medium">
        <table>
          <thead className="is-invisible">
            <tr>
              <th><FormattedMessage id='property' /></th>
              <th><FormattedMessage id='value' /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><FormattedMessage id='product.name' /></td>
              <td>{productName}</td>
            </tr>
            <tr>
              <td><FormattedMessage id='product.expire' /></td>
              <td>{productExpire}</td>
            </tr>
            <tr>
              <td><FormattedMessage id='product.packageWeight' /></td>
              <td>{productPackageWeight}</td>
            </tr>
            <tr>
              <td><FormattedMessage id='product.packageSize' /></td>
              <td>{productPackageSize}</td>
            </tr>
            <tr>
              <td><FormattedMessage id='product.code' /></td>
              <td>{productCode}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

ProductInfo.propTypes = {
  productName: PropTypes.string.isRequired,
  productExpire: PropTypes.string.isRequired,
  productPackageWeight: PropTypes.string.isRequired,
  productPackageSize: PropTypes.string.isRequired,
  productCode: PropTypes.string.isRequired,
  isRight: PropTypes.bool.isRequired
}

export default ProductInfo
