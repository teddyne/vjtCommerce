import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import ProductLayout from '../common/productLayout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SideBar from '../../layouts/sideBar'
import Slider from '../../layouts/slider'
import ProductService from './product.service'

const Product = () => {
  const [products, setProducts] = useState([])
  const [widgets, setWidgets] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      const result = await ProductService.getProducts()
      setProducts(result.data)
      const widgetData = getWidgets(result.data)
      setWidgets(widgetData)
    } catch (ex) {
      console.log(ex)
    }
  }

  const getWidgets = (products) => {
    let widgets = []
    _.forEach(products, e => {
      if(!_.isEmpty(e.widgets)) {
        _.forEach(e.widgets, widget => {
          if(!_.includes(widgets, widget.name)) {
            widgets.push(widget.name)
          }
        })
      }
    })
    return widgets
  }

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
        <ProductLayout widgets={widgets} products={products} />
      </div>
    </React.Fragment>
  )
}
export default Product