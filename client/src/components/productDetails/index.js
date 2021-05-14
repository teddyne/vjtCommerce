import React, { useEffect, useState, useContext } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from 'react-router-dom'
import ProductThumb from './productThumb'
import ProductInfo from './productInfo'
import ProductDetailInfo from './productDetailInfo'
import ProductDescription from './productDescription'
import Review from './review'
import SimilarProduct from '../products/similarProduct'
import ProductService from '../../services/product.service'
import { Context } from '../../store/store'
import { SET_LOADING } from '../../store/action'

import './scss/_productDetail.scss'

function ProductDetail() {
  let { productId } = useParams()
  const [product, setProduct] = useState({})
  const [, dispatch] = useContext(Context)

  useEffect(() => {
    const getProduct = async () => {
      dispatch({ type: SET_LOADING, payload: true })
      try {
        const product = await ProductService.getProductById(productId)
        setProduct(product.data)
      } catch (ex) {
        console.log(ex)
      }
      dispatch({ type: SET_LOADING, payload: false })
    }
    getProduct()
  }, [productId])

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
      <ProductDetailInfo key='similar-product-ind1ex' />
      <ProductDescription key='similar-product-in323dex' product={product} />
      <Review key='similar-product-ind323ex' numberReviews={[0, 0, 0, 0, 0]} />
      <SimilarProduct key='similar-product-ind32ex' {...{_id: product._id, categoryName: product.category?.name}} />
    </React.Fragment>
  )
}
export default ProductDetail
