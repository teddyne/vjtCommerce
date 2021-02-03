import React from 'react'
import Box from '../common/box'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ProductStar from './productStar'
import ReviewChart from './reviewChart'
import ReviewList from './reviewList'
import { reviews } from '../.././constants/data'

import './scss/_review.scss'

const Review = ({ numberReviews }) => {
  let totalReviews = numberReviews.reduce((a, b) => a + b)
  return (
    <Box title="đánh giá sản phẩm">
      <div className="product-review">
        <div className="review-star">
          <Container className="review-star">
            <Row>
              <Col sm={3}>
                <div className="average-point">4.5</div>
                <ProductStar numberStar={4.5} size={"sm"} />
                <div className="total-reviews">{totalReviews} nhận xét</div>
              </Col>
              <Col sm={9}>
                <ReviewChart totalReviews={totalReviews} numberReviews={numberReviews} />
              </Col>
            </Row>
            <div className="review-list">
              <ReviewList items={reviews} />
            </div>
          </Container>
        </div>
      </div>
    </Box>
  )
}
export default Review
