import React from 'react'
import _ from 'lodash'
import ReviewItem from './reviewItem'

const ReviewList = ({ items }) => {
    
    return _.isEmpty(items) ? 
    (
        <div>No reviews</div>

    ) :
     _.map(items, (item, index) => {
            return (
                <ReviewItem key={index} item={item} />
            )
    })
}
export default ReviewList