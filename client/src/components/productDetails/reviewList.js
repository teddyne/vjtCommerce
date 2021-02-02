import React from 'react'
import _ from 'lodash'

const ReviewList = ({ items }) => {
    
    return _.isEmpty(items) ? 
    (
        <div>No reviews</div>

    ) : (
        <h1>ReviewList</h1>
    )
}
export default ReviewList