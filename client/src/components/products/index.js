import React, { useEffect, useState, useContext } from 'react'
import ProductLayout from '../common/productLayout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SideBar from '../../layouts/sideBar'
import Slider from '../../layouts/slider'
import ProductService from '../../services/product.service'
import { Context } from '../../store/store'
import { SET_LOADING } from '../../store/action'

const Product = () => {
  const [state, dispatch] = useContext(Context)
  const [products, setProducts] = useState([])
  const [widgets, setWidgets] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      dispatch({ type: SET_LOADING, payload: true })
      try {
        const result = await ProductService.getProducts()
        setProducts(result.data)
      } catch (ex) {
        console.log(ex)
      }
      dispatch({ type: SET_LOADING, payload: false })
    }
    
    const getWidgets = async () => {
      try {
        const result = await ProductService.getWidgets()
        setWidgets(result.data)
      } catch (ex) {
        console.log(ex)
      }
    }
    getProducts()
    getWidgets()
  }, [])

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