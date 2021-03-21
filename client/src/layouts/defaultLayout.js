import React from 'react'
import Container from 'react-bootstrap/Container'
import Header from './header'
import Footer from './footer'
import ContactBox from './contactBox'
import ScrollTop from '../components/common/scrollTop'
import './scss/_defaultLayout.scss'

const DefaultLayout = (props) => {
  const handleScrollTop = () => {
    console.log('scroll cmm');
  }
  return (
    <React.Fragment>
      <Header />
      <main onScroll={handleScrollTop} className="wrap">
        <Container onScroll={handleScrollTop} className="main">
          {props.children}
        </Container>
      </main>
      <Footer />
      <ContactBox />
      <ScrollTop />
    </React.Fragment>
  )
}

export default DefaultLayout
