import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from './header'
import Footer from './footer'
import SideBar from './sideBar'
import Slider from './slider'

import './scss/_defaultLayout.scss'

const DefaultLayout = (props) => {
  return props.isHome ? (
    <React.Fragment>
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
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Header />
      <main className="wrap">
        <Container className="main">{props.children}</Container>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default DefaultLayout
