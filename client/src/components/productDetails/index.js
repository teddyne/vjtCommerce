import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from 'react-router-dom'
import ProductThumb from './productThumb'
import ProductInfo from './productInfo'
import ProductDetailInfo from './productDetailInfo'
import ProductDescription from './productDescription'
import Review from './review'
import SimilarProduct from '../products/similarProduct'
import ProductService from '../products/product.service'
import _ from 'lodash'

import './scss/_productDetail.scss'

function ProductDetail() {
  let { productId } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    getProduct()
    console.log('useEffect');
  }, [])

  const getProduct = async () => {
    try {
      const product = await ProductService.getProductById(productId)
      console.log('product', product);
      setProduct(product.data)
    } catch (ex) {
      console.log(ex)
    }
  }

  const similarProductInfo = {
    _id: product._id,
    categoryName: product.category?.name
  }
  console.log('ll', similarProductInfo)

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
      <SimilarProduct {...similarProductInfo} />
    </React.Fragment>
  )
}
export default ProductDetail
