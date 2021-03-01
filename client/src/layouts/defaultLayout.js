import React from 'react'
import Container from 'react-bootstrap/Container'
import Header from './header'
import Footer from './footer'
import ContactBox from './contactBox'

import './scss/_defaultLayout.scss'

const DefaultLayout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <main className="wrap">
        <Container className="main">
         {props.children}
        </Container>
      </main>
      <Footer />
      <ContactBox />
    </React.Fragment>
  )
}

export default DefaultLayout
