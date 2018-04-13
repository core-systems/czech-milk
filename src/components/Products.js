import React from 'react'
import PropTypes from 'prop-types'

import Product from './Product'

const description = `
Toto mléko určené zejména těm nejmenším, je přesně to pravé, co děti
pro svůj zdravý růst potřebují. Je významným zdrojem plnohodnotných
bílkovin a vápníku důležitého pro zdravý vývoj zubů a kostí. Je vyrobeno
z nejkvalitnějšího českého mléka a díky tomu si ho Vy i Vaše dítě
zamilujete. Navíc je v praktickém balení s brčkem. Splňuje požadavky
bezlepkové diety. Vápník ve 100 ml 120 mg = 15% DDD
`
const expire = `120 dní`
const packageWeight = `cca 1 Kg`
const packageSize = `	12 ks`
const code = `8593803224206`

const products = [
  {
    id: 1,
    name: 'Lipánek vanilka',
    description: description,
    expire,
    packageWeight,
    packageSize,
    code
  },
  {
    id: 2,
    name: 'Milk',
    description: description,
    expire,
    packageWeight,
    packageSize,
    code
  },
  {
    id: 3,
    name: 'Lipánek',
    description: description,
    expire,
    packageWeight,
    packageSize,
    code
  },
  {
    id: 4,
    name: 'Milk Full Fat',
    description: description,
    expire,
    packageWeight,
    packageSize,
    code
  },
]

const Products = (props) => (
  <section className="section section-products" role="products">
    {products.map((product, i) => <Product key={`product-${product.id}`} {...product} isLast={++i === products.length} />)}
  </section>
)

Products.propTypes = {

}

export default Products
