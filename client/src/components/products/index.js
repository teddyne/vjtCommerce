import React from 'react'
import _ from 'lodash'
import { productBoxes, products } from '../../constants/data'
import ProductLayout from '../common/productLayout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SideBar from '../../layouts/sideBar'
import Slider from '../../layouts/slider'

const Product = () => {
  return (
    <React.Fragment>
      <Row>
        <Col lg={3}>
          <SideBar />
        </Col>
        <Col sm={12} lg={9}>
          <Slider />
        </Col>
      </Row>
      <div className="content">
        <ProductLayout productBoxes={productBoxes} products={products} />
      </div>
    </React.Fragment>
  )
}
export default Product