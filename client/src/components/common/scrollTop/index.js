import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import './scss/_scrollTop.scss'

const ScrollTop = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const onScroll = (e) => {
            const scrollTopValue = e.target.documentElement.scrollTop || e.target.body.scrollTop
            setShow(scrollTopValue > 200 ? true : false)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener("scroll", onScroll)
      }, [])

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
      
    return (
        show ?
        (
            <div className='scroll-top' onClick={scrollToTop}>
                <FontAwesomeIcon className='icon' icon={faAngleUp} size='2x' color={'white'} />
            </div>
        ) : null
    )
}

export default ScrollTop