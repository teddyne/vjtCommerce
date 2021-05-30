import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Header from './header'
import Footer from './footer'
import ContactBox from './contactBox'
import ScrollTop from '../components/common/scrollTop'
import { Context } from '../store/store'
import color from '../assets/scss/_colors.scss'
import LoadingBar from 'react-top-loading-bar'
import { SET_LOADING_BAR } from '../store/action'

import './scss/_defaultLayout.scss'

const DefaultLayout = (props) => {
  const [state, dispatch] = useContext(Context)

  const onLoadFinishedHandler = () => {
    dispatch({ type: SET_LOADING_BAR, payload: 0 })
  }

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
      {/* <Spinner loading={state.loading} /> */}
      <LoadingBar color={color.loading_bar_color} progress={state.progress} onLoaderFinished={onLoadFinishedHandler} />
    </React.Fragment>
  )
}

export default DefaultLayout
