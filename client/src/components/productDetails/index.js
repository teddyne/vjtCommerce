import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from 'react-router-dom'
import ProductThumb from './productThumb'
import ProductInfo from './productInfo'
import ProductDetailInfo from './productDetailInfo'
import { products } from '../../constants/data'
import _ from 'lodash'
import ProductDescription from './productDescription'
import Review from './review'

import './scss/_productDetail.scss'

function ProductDetail() {
  let { productId } = useParams()

  const product1 = () => {
    const product = _.find(products, (x) => x.id === productId)
    return product
  }

  function getProduct() {
    const product = _.find(products, (x) => x.id === productId)
    return product
  }

  const product2 = getProduct()

  return (
    <React.Fragment>
      <Row className="product-detail">
        <Col lg={5}>
          <ProductThumb product={product1()} />
        </Col>
        <Col lg={7}>
          <ProductInfo product={product1()} />
        </Col>
      </Row>
      <ProductDetailInfo />
      <ProductDescription product={product1()} />
      <Review />
    </React.Fragment>
  )
}
export default ProductDetail
