import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import ShoppingCart from '../assets/images/shopping-cart.png'
import { useHistory} from 'react-router-dom'

import './scss/_header.scss'

const Header = () => {
  let history = useHistory()
  const handleClickLogo = () => {
    history.push('/')
  }

  return (
    <header className="header">
      <div className="hamberger-menu">
        <FontAwesomeIcon icon={faBars} size="2x" color="white" />
      </div>
      <Container className="site-logo">
        <Row className="wrap-logo">
          <div onClick={handleClickLogo} className="center-logo">
            Solo Travel Shop
          </div>
          <div className="shopping-cart">
            <img src={ShoppingCart} alt="Shopping cart" />
            <span className="item-cart-qty">
              <span className="qty-text">3</span>
            </span>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header;
