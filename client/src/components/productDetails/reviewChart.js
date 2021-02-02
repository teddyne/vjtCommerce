import React from 'react'
import _ from 'lodash'
import { Constant } from '../../constants'
import ProductStar from './productStar'
import ProgressBar from 'react-bootstrap/ProgressBar'

import './scss/_reviewChart.scss'

const ReviewChart = ({ totalReviews, numberReviews }) => {
    let star = Constant.MAX_STAR + 1
    return _.map(numberReviews, (numberReview, index) => {
        star = star - 1
        return (
            <div className="review-chart">
                <div>
                <ProductStar className="product-star" key={index} numberStar={star} isShowEmptyStar={true} />
                </div>
                <div className="review-bar-chart">
                    <ProgressBar now={Math.ceil((numberReview / totalReviews) * 100)} />
                </div>
                <div className="number-review">{numberReview}</div>
            </div>
        )
    })
}
export default ReviewChart