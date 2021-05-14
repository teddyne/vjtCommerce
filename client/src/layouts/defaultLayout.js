import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Header from './header'
import Footer from './footer'
import ContactBox from './contactBox'
import ScrollTop from '../components/common/scrollTop'
import Spinner from '../components/common/spinner'
import { Context } from '../store/store'

import './scss/_defaultLayout.scss'

const DefaultLayout = (props) => {
  const [state,] = useContext(Context)
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
      <ScrollTop />
      <Spinner loading={state.loading} />
    </React.Fragment>
  )
}

export default DefaultLayout
