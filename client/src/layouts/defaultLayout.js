import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from './header'
import Footer from './footer'
import SideBar from './sideBar'
import Slider from './slider'
import ContactBox from './contactBox'
import Store from '../store/store'

import './scss/_defaultLayout.scss'

const DefaultLayout = (props) => {
  return props.isHome ? (
    <Store>
      <Header />
      <main className="wrap">
        <Container className="main">
          <Row>
            <Col lg={3}>
              <SideBar />
            </Col>
            <Col sm={12} lg={9}>
              <Slider />
            </Col>
          </Row>
          <div className="content">{props.children}</div>
        </Container>
      </main>
      <Footer />
      <ContactBox />
    </Store>
  ) : (
    <Store>
      <Header />
      <main className="wrap">
        <Container className="main">{props.children}</Container>
      </main>
      <Footer />
      <ContactBox />
    </Store>
  )
}

export default DefaultLayout
