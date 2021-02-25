import React, { useContext, useEffect, useState } from 'react'
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
import { Context } from '../store/store'
import blog from '../assets/images/menu/blog.png'
import story from '../assets/images/menu/story.png'
import logo from '../assets/images/logo5.png'

import './scss/_header.scss'

const Header = () => {
  const history = useHistory()
  const [state, dispatch] = useContext(Context)

  const handleClickLogo = () => {
    history.push('/')
  }

  return (
    <header className="header fixed-top">
      <div className="hamberger-menu">
        <FontAwesomeIcon icon={faBars} size="2x" color="white" />
      </div>
      <Container className="site-logo">
        <Row className="wrap-logo">
          <Col lg={3}>
          <div onClick={handleClickLogo} className="center-logo">
            <img src={logo} />
          </div>
          </Col>
          <Col lg={9}>
            <div className='header-col-2'>
              <div className='search-box'>
              <Form.Group>
                <Form.Control className="search-input" size="lg" type="text" placeholder="Tìm sản phẩm bạn cần mua" />
                <Button className="btn-search"><FontAwesomeIcon icon={faSearch} color={'white'} />Tìm Kiếm</Button>
              </Form.Group>
            </div>
            <div className="shopping-cart">
              <img src={ShoppingCart} alt="Shopping cart" />
              <span className={state.carts.length >= 10 ? 'item-cart-qty-large' : 'item-cart-qty'}>
                <span className="qty-text">{state.carts.length}</span>
              </span>
            </div>
            </div>
          <div className='header-menu'>
            <ul>
              <li className="side-bar-item">
                <a className="side-bar-item-content" href="#home">
                  <span className="side-bar-icon">
                    <img src={story} />
                  </span>
                  <span>Story</span>
                </a>
              </li>
              <li className="side-bar-item">
                <a className="side-bar-item-content" href="#home">
                  <span className="side-bar-icon">
                    <img src={blog} />
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
