import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from 'react-router-dom'
import ProductThumb from './productThumb'
import ProductInfo from './productInfo'
import ProductDetailInfo from './productDetailInfo'
import _ from 'lodash'
import ProductDescription from './productDescription'
import Review from './review'
import SimilarProduct from '../products/similarProduct'
import ProductService from '../products/product.service'

import './scss/_productDetail.scss'

function ProductDetail() {
  let { productId } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    getProduct()
  }, [productId])

  const getProduct = async () => {
    try {
      const product = await ProductService.getProductById(productId)
      setProduct(product.data)
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <React.Fragment>
      <Row className="product-detail">
        <Col lg={5}>
          <ProductThumb product={product} />
        </Col>
        <Col lg={7}>
          <ProductInfo product={product} />
        </Col>
      </Row>
      <ProductDetailInfo />
      <ProductDescription product={product} />
      <Review numberReviews={[13, 8, 4, 1, 0]} />
      <SimilarProduct product={product} />
    </React.Fragment>
  )
}
export default ProductDetail
