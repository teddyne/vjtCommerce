import React, { useState, useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ShoppingCart from '../assets/images/shopping-cart.png'
import { useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import blog from '../assets/images/menu/blog.png'
import story from '../assets/images/menu/story.png'
import logo from '../assets/images/logo5.png'
import { Context } from '../store/store'

import './scss/_header.scss'

const Header = () => {
  const history = useHistory()
  const [state] = useContext(Context)

  const cartNumber = localStorage.getItem('carts') ?? 0
  const [, updateState] = useState();
  React.useCallback(() => updateState({}), [])

  useEffect(() => {
    console.log('cartNumber', cartNumber)
  }, [cartNumber])

  const handleRedirect = (path) => {
    history.push(`/${path}`)
  }

  return (
    <header className="header fixed-top">
      <div className="hamberger-menu">
        <FontAwesomeIcon icon={faBars} size="2x" color="white" />
      </div>
      <Container className="site-logo">
        <Row className="wrap-logo">
          <Col lg={3}>
          <div onClick={() => handleRedirect('')} className="center-logo">
            <img src={logo} alt='logo' />
          </div>
          </Col>
          <Col lg={9}>
            <div className="login-account">
              <span className="text" onClick={() => handleRedirect('sign-in')}>Đăng Nhập</span>
              <span className="text" onClick={() => handleRedirect('sign-up')}>Đăng Ký</span>
            </div>
            <div className='header-col-2'>
              <div className='search-box'>
              <Form.Group>
                <Form.Control className="search-input" size="lg" type="text" placeholder="Tìm sản phẩm bạn cần mua" />
                <Button className="btn-search"><FontAwesomeIcon icon={faSearch} color={'white'} />Tìm Kiếm</Button>
              </Form.Group>
              </div>
              <div onClick={() => handleRedirect('cart')} className="shopping-cart">
                <img src={ShoppingCart} alt="Shopping cart" />
                <span className={cartNumber >= 10 ? 'item-cart-qty-large' : 'item-cart-qty'}>
                  <span className="qty-text">{cartNumber}</span>
                </span>
              </div>
            </div>
          <div className='header-menu'>
            <ul>
              <li className="side-bar-item">
                <a className="side-bar-item-content" onClick={() => handleRedirect('story')}>
                  <span className="side-bar-icon">
                    <img src={story} alt='story' />
                  </span>
                  <span>Story</span>
                </a>
              </li>
              <li className="side-bar-item">
                <a className="side-bar-item-content" onClick={() => handleRedirect('blog')}>
                  <span className="side-bar-icon">
                    <img src={blog} alt='blog' />
                  </span>
                  <span>Blog</span>
                </a>
              </li> 
            </ul>
          </div>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
