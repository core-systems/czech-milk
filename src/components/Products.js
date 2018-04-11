import React from 'react'
import { FormattedMessage, injectIntl, intlShape, FormattedRelative } from 'react-intl'

import Link from './Link'

import product1 from '../img/product-1.png'
import product1Logo from '../img/product-1-logo.png'
//import product1Cloud from '../img/product-1-cloud.png'

const Productsccccc = () => (
  <figure className="image0">
    <img src={madeta} alt={'Madeta'} width={99} height={36} />
  </figure>
)

const Products = (props) => (
  <section className="section section-products" role="products">
    <div className="product">
      <div className="columns">
        <div className="column is-4 is-offset-01 product-image">
          <div className="content">
            <figure className="image is-2by3 image-product">
              <img src={product1} alt={'product1'} width={268} />
            </figure>
          </div>
        </div>
        <div className="column is-offset-01">
          <div className="columns">
            <div className="column is-4">
              <figure className="image0">
                <img src={product1Logo} alt={'product1Logo'} width={195} />
              </figure>
            </div>
            <div className="column"></div>
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
    </div>
  </section>
)

Products.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(Products)
