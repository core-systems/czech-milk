import React from 'react'
import PropTypes from 'prop-types'

import Product from './Product'

const Products = (props) => (
  <section className="section section-products" role="products">
    <Product id={1} name='Lipánek' description='' />
    <Product id={2} name='Milk' description='' />
    <Product id={3} name='Lipánek' description='' />
    <Product id={4} name='Milk Full Fat' isLast={true} />
  </section>
)

Products.propTypes = {

}

export default Products
