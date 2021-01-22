import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from 'react-router-dom'
import ProductThumb from './productThumb'
import ProductInfo from './productInfo'
import ProductDetailInfo from './productDetailInfo'
import { products } from '../../data'
import _ from 'lodash'

import './_productDetail.scss'


function ProductDetail ()  {
  let { productId } = useParams()

  const product1 = () => {
    const product = _.find(products, x => x.id === productId)
    return product
  }

  function getProduct () {
    const product = _.find(products, x => x.id === productId)
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
      <Row className="product-detail">
        <ProductDetailInfo />
      </Row>
    </React.Fragment>
  );
}
export default ProductDetail
