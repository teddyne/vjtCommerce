import React from 'react'
import _ from 'lodash'
import { Constant } from '../../constants'
import ProductStar from './productStar'
import ProgressBar from 'react-bootstrap/ProgressBar'

import './scss/_reviewChart.scss'

const ReviewChart = ({ numberReviews }) => {
    let star = Constant.MAX_STAR + 1
    return _.map(numberReviews, (numberReview, index) => {
        star = star - 1
        return (
            <ProductStar key={index} numberStar={star} isShowEmptyStar={true} />
        )
    })
}
export default ReviewChart