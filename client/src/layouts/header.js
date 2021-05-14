import React, { useContext } from 'react'
import { withContainer } from './container'
import _ from 'lodash'
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
import Profile from './profile'
import UserSection from './userSection'

import './scss/_header.scss'

const Header = () => {
  const history = useHistory()
  const [state] = useContext(Context)

  const getQuantity = () => {
    return _.reduce(state.currentUser?.carts, (s, { quantity }) => s + quantity, 0)
  }

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
            <UserSection currentUser={state.currentUser} />
            <div className='header-col-2'>
              <div className='search-box'>
              <Form.Group>
                <Form.Control className="search-input" size="lg" type="text" placeholder="Tìm sản phẩm bạn cần mua" />
                <Button className="btn-search"><FontAwesomeIcon className='search-icon' icon={faSearch} color={'white'} />Tìm Kiếm</Button>
              </Form.Group>
              </div>
              <div onClick={() => handleRedirect('cart')} className="shopping-cart">
                <img src={ShoppingCart} alt="Shopping cart" />
                <span className={getQuantity() >= 10 ? 'item-cart-qty-large' : 'item-cart-qty'}>
                  <span className="qty-text">{getQuantity()}</span>
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
      <Profile currentUser={state.currentUser} />
    </header>
  )
}

export default Header
