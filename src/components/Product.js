import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape, FormattedRelative } from 'react-intl'

import Link from './Link'
import ProductInfo from './ProductInfo'

const Product = ({
  id,
  name,
  description,
  isLast,
}) => {
  const isRight = id % 2 === 0
  const productName = name
  const productDescription = description
  const productImg = require(`../img/product-${id}.png`)
  const productImgCloud = require(`../img/product-${id}-cloud.png`)
  const productLogo = require(`../img/product-${id}-logo.png`)
  const lineBreak = require(`../img/break-line-cloud${( isRight ? '2' : '' )}.png`)

  return (
    <div className="product">
      <div className={`columns ${isRight ? 'reverse-rows right' : 'left'}`}>
        <div className="column is-4 product-image">
          <div className="content">
            <figure className="image">
              <img src={productImg} alt={`[product, image, ${productName}]`} width={268} />
            </figure>
            <div className={`product-cloud ${isRight ? 'reverse' : ''}`} style={{ backgroundImage: `url(${productImgCloud})` }}></div>
          </div>
        </div>
        <div className="column product-info">
          <div className="columns">
            <div className="column is-4">
              <figure className="has-text-centered-mobile">
                <img src={productLogo} alt={`[product, logo, ${productName}]`} />
              </figure>
            </div>
          </div>
          <div className="content product-description is-medium">
              Toto mléko určené zejména těm nejmenším, je přesně to pravé, co děti
              pro svůj zdravý růst potřebují. Je významným zdrojem plnohodnotných
              bílkovin a vápníku důležitého pro zdravý vývoj zubů a kostí. Je vyrobeno
              z nejkvalitnějšího českého mléka a díky tomu si ho Vy i Vaše dítě
              zamilujete. Navíc je v praktickém balení s brčkem. Splňuje požadavky
              bezlepkové diety. Vápník ve 100 ml 120 mg = 15% DDD
          </div>
          <ProductInfo
            productName="trvanlivé mléko polotučné"
            productExpire="120 dní"
            productPackageWeight="cca 1 Kg"
            productPackageSize="12 ks"
            productCode="8593803224206"
            isRight={isRight}
          />
        </div>
      </div>
      { !isLast &&
        <figure className="image break-line-cloud">
          <img src={lineBreak} alt='' width='100%' />
        </figure>
      }
    </div>
  )
}

Product.propTypes = {
  intl: intlShape.isRequired,

  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isLast: PropTypes.bool,
}

export default injectIntl(Product)
