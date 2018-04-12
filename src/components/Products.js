import React from 'react'
import { FormattedMessage, injectIntl, intlShape, FormattedRelative } from 'react-intl'

import Link from './Link'

const Product = (props) => {
  const isRight = props.id % 2 === 0
  const productName = props.name
  const productDescription = props.description
  const productImg = require(`../img/product-${props.id}.png`)
  const productImgCloud = require(`../img/product-${props.id}-cloud.png`)
  const productLogo = require(`../img/product-${props.id}-logo.png`)
  const lineBreak = require(`../img/break-line-cloud${( isRight ? '2' : '' )}.png`)

  return (
    <div className="product">
      <div className={`columns ${isRight ? 'reverse-rows right' : 'left'}`}>
        <div className="column is-4 product-image">
          <div className="content">
            <figure className="image is-2by3">
              <img src={productImg} alt={`[product, image, ${productName}]`} width={268} />
            </figure>
          </div>
          <div className={`product-cloud ${isRight ? 'reverse' : ''}`} style={{ backgroundImage: `url(${productImgCloud})` }}></div>
        </div>
        <div className="column product-info">
          <div className="columns">
            <div className="column is-4">
              <figure className="has-text-centered-mobile">
                <img src={productLogo} alt={`[product, logo, ${productName}]`} />
              </figure>
            </div>
          </div>
          <div className="content product-description">
              Toto mléko určené zejména těm nejmenším, je přesně to pravé, co děti
              pro svůj zdravý růst potřebují. Je významným zdrojem plnohodnotných
              bílkovin a vápníku důležitého pro zdravý vývoj zubů a kostí. Je vyrobeno
              z nejkvalitnějšího českého mléka a díky tomu si ho Vy i Vaše dítě
              zamilujete. Navíc je v praktickém balení s brčkem. Splňuje požadavky
              bezlepkové diety. Vápník ve 100 ml 120 mg = 15% DDD
          </div>
        </div>
      </div>
      { !props.isLast &&
        <figure className="image break-line-cloud">
          <img src={lineBreak} alt='' width='100%' />
        </figure>
      }
    </div>
  )
}

const Products = (props) => (
  <section className="section section-products" role="products">
    <Product id={1} name='Lipánek' isLast={false} />
    <Product id={2} name='Milk' isLast={false} />
    <Product id={3} name='Lipánek' isLast={false} />
    <Product id={4} name='Milk Full Fat' isLast={true} />
  </section>
)

Products.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(Products)
