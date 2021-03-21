import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import './scss/_scrollTop.scss'

const ScrollTop = () => {
    const handleScrollTop = () => {
        console.log('clicked')
    }
    const handleOnScroll = () => {
        console.log('scrolled')
    }
    return (
        <div className='scroll-top' onScroll={handleOnScroll} onClick={handleScrollTop}>
            <FontAwesomeIcon className='icon' icon={faAngleUp} size='2x' color={'white'} />
        </div>
    )
}

export default ScrollTop