import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape, FormattedRelative } from 'react-intl'
import Image from 'gatsby-image'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'

import Link from './Link'
import ProductInfo from './ProductInfo'
import ContactForm from './ContactForm'

const MoreBtn = ({ isActive }) => (
  <a className={`button is-large ${isActive ? 'is-active' : ''}`}>
    <span>
      <FormattedMessage id="product.moreBtn" />
    </span>
    <span className="icon is-large">
      <i className={`fas ${isActive ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
    </span>
  </a>
)

class Product extends React.PureComponent  {

  state = {
    isActiveMore: false,
  }

  constructor(props) {
      super(props)
  }

  toogle() {
    this.setState((prevState) => ({
      ...prevState,
      isActiveMore: !prevState.isActiveMore,
    }))
  }

  render() {
    const {
      intl,
      id,
      title,
      description,
      detail,
      image,
      logo,
      cloud,
      info,
      isLast,
      isRight,
    } = this.props
    const {
      isActiveMore,
    } = this.state

    //const productImg = `${image}`
    //const productImgCloud = `${cloud}`
    const productImgCloud = ``
    //const productLogo = `${logo}`
    const lineBreak = require(`../img/break-line-cloud${( isRight ? '2' : '' )}.png`)

    const detailContent = remark()
          .use(recommended)
          .use(remarkHtml)
          .processSync(detail).toString()

    return (
      <div className={`product ${isRight ? 'is-right' : 'is-left'}`}>
        <div className={`columns ${isRight ? 'reverse-rows right' : 'left'}`}>
          <div className="column is-4 product-image">
            <div className="content">
              <figure className="image">
                <Image sizes={image.childImageSharp.sizes} alt={`[product, image, ${title}]`} title={`${title}`} />
                {/*<img src={productImg} alt={`[product, image, ${title}]`} width={268} />*/}
              </figure>
              {/*<Image sizes={cloud.childImageSharp.sizes} alt={`[product, image, ${title}]`} title={`${title}]`} />*/}
              <div className={`product-cloud ${isRight ? 'reverse' : ''}`} style={{ backgroundImage: `url(${cloud.childImageSharp.sizes.src})` }}></div>
            </div>
          </div>
          <div className="column product-info">
            <div className="columns">
              <div className="column is-4">
                <figure className="has-text-centered-mobile" style={{ position: 'relative'}}>
                  {/*<Image sizes={logo.childImageSharp.sizes} alt={`[product, logo, ${title}]`} style={{ position: 'relative'}} />*/}
                  <Image resolutions={logo.childImageSharp.resolutions} alt={`[product, logo, ${title}]`} style={{ position: 'relative'}} />
                  {/*<img src={productLogo} alt={`[product, logo, ${title}]`} />*/}
                </figure>
              </div>
            </div>
            <div className="content product-description is-medium">
              {description}
            </div>
            <ProductInfo info={info} isRight={isRight} />
          </div>
        </div>
        <div className="content0 has-text-centered detail-btn">
          <p className="field">
            <label htmlFor={`toggle-product-${id}-more`} onClick={() => this.toogle()}>
              <MoreBtn isActive={isActiveMore} />
            </label>
          </p>
        </div>
        <div className="content product-more is-medium">
            <input type="checkbox" id={`toggle-product-${id}-more`} className="toggle-checkbox" />
            <div className="toggle-item">
              <div className="content" dangerouslySetInnerHTML={{ __html: detailContent }} />
              <div className="content">
                <ContactForm topic={`[${intl.locale.toUpperCase()}] Product - ${info.name} (${info.code})`} />
              </div>
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
}

Product.propTypes = {
  intl: intlShape.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  info: ProductInfo.propTypes.info,
  image: PropTypes.object.isRequired,
  logo: PropTypes.object.isRequired,
  cloud: PropTypes.object.isRequired,
  isRight: PropTypes.bool,
  isLast: PropTypes.bool,
}

export default injectIntl(Product)
