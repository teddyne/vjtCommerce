import React from 'react';
import './_header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ShoppingCart from '../assets/images/shopping-cart.png'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="hamberger-menu">
          <FontAwesomeIcon icon={faBars} size="2x" color="white" />
        </div>
        <Container className="site-logo">
          <Row className="wrap-logo">
            <div className="center-logo">Header title</div>
            <div className="shopping-cart">
              <img src={ShoppingCart} alt="Shopping cart" />
              <span className="item-cart-qty">
                <span className="qty-text">3</span>
              </span>
            </div>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
