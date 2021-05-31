import React from 'react'
import _ from 'lodash'
import ReviewItem from './reviewItem'
import noReviews from '../../assets/images/no-review.png'

const ReviewList = ({ items }) => {
    return _.isEmpty(items) ?
        (
            <div className='no-review'>
                <img src={noReviews} alt='No reviews' />
                <span><p>Hãy trở thành người đâu tiên đánh giá cho sản phẩm này nhé!</p></span>
            </div>

        ) :
        _.map(items, (item, index) => {
            return (
                <ReviewItem key={index} item={item} />
            )
        })
}
export default ReviewList