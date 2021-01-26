import React from 'react'
import Box from '../common/box'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import './scss/_review.scss'
import ProductStar from './productStar'

const Review = () => {
  return (
    <Box title="đánh giá sản phẩm">
      <div className="product-review">
        <div className="review-star">
          <Container className="review-star">
            <Row>
              <Col xs={3}>
                <div className="avarage-point">4.5</div>
                <ProductStar numberStar={4.5} />
              </Col>
              <Col xs={9}>review detail</Col>
            </Row>
          </Container>
        </div>
      </div>
    </Box>
  )
}
export default Review
