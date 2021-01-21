import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from 'react-router-dom'
import ProductThumb from './productThumb'
import ProductInfo from './productInfo'
import { products } from '../../data'
import _ from 'lodash'


import './_productDetail.scss'


const ProductDetail = (props) => {
  let { productId } = useParams();

  const product = (productId) => {
    //console.log(products)
    return _.filter(products, x => x.id == productId)
  }
  return (
    <Row className="product-detail">
      <Col lg={4}>
          <ProductThumb product={product} />
      </Col>
      <Col lg={8}>
        <ProductInfo />
      </Col>
    </Row>
  );
};
export default ProductDetail;
