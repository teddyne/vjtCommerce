import React from 'react'
import './scss/_reviewItem.scss'
import avatar from '../../assets/images/avatar.jpg'

const ReviewItem = () => {
    return (
        <div className="review-item">
            <div className='review-general-info'>
                <div className='review-avatar'>
                    <img src={avatar} alt='avatar' />
                </div>
                <div className='review-info'>
                    <div className='review-user'>
                        <div className='review-name'>
                            Vu Nguyen
                        </div>
                        <div className='review-bought'>
                            Đã mua hàng
                        </div>
                    </div>
                    <div className='review-date'>
                        Nhận xét vào 18 tháng 01, 2021
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReviewItem