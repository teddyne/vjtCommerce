import React from 'react'
import ProductStar from './productStar'
import Emoji from '../../common/emoji'

import './scss/_reviewItem.scss'

const ReviewItem = () => {
    return (
        <div className='review-item'>
            <div className='review-general-info'>
                <div className='review-avatar'>
                    <img src={''} alt='avatar' />
                </div>
                <div className='review-info'>
                    <div className='review-user'>
                        <div className='review-name'>
                            Vu Nguyen
                        </div>
                        <div className='review-bought'>
                            <span className='bougth-verified'>Đã mua hàng</span>
                            <div className='review-check-circle'>
                                <Emoji symbol='✅' label='check' />
                            </div>
                        </div>
                    </div>
                    <div className='review-date'>
                        Nhận xét vào 18 tháng 01, 2021
                    </div>
                </div>
            </div>
            <div className='review-star'>
                <ProductStar  psKey={'review-item'} numberStar={4.5} size={'sm'} />
            </div>
            <div className='review-content'>
                <p>Mũ khá đẹp, chắc chắn, mang vào thoải mái. Tuy nhiên phần kính chắc gió không được tốt. Mình đội mũ, cụp kính xuống đi ngoài đường hơn 30 phút thì về nhà mắt sẽ bị mỏi, rất khó chịu. Nếu mà đi trời nắng có mặt trời phía trước mà cụp kính xuống sẽ thấy chói hơn khi không cụp. Ánh sáng mặt trời vào kính bị tán sắc, tạo ra các tia ánh sangs màu cầu vòng rất khó chịu. Vậy nên gần như mình không thể sử dụng mũ này được. Còn 1 vấn đề nhỏ nữa là phần lỗ gió 2 bên tai, khi đi gặp gió mạnh tạc vào tai thì tiếng khá ồn, khi gió đến từ phía trước thì mũ cản âm tốt, không bị bí tai. Thực sự rất tiếc.</p>
            </div>
        </div>
    )
}
export default ReviewItem