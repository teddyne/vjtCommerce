import React from 'react';
import { withContainer, withLayout } from './layouts/container'
import ProductDetail from './components/productDetails/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Product from './components/products'
import Cart from './components/carts'
import Admin from './pages/admin'
import SignIn from './components/signin'
import SignUp from './components/signup'

class App extends React.Component {
  buildPages() {
    return [
      { exact : true, path: '/', key: 'product', render: () => withLayout(<Product />) },
      { path: '/products/:productId', key: 'product-detail', render: () => withLayout(<ProductDetail />) },
      { path: '/cart', key: 'cart', render: () => withLayout(<Cart />) },
      { path: '/admin', key: 'cart', render: () => withLayout(<Admin />, true) },
      { path: '/sign-in', key: 'sign-in', render: () => withLayout(<SignIn />) },
      { path: '/sign-up', key: 'sign-up', render: () => withLayout(<SignUp />) }
    ]
  }

  render () {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            { this.buildPages().map((route) => <Route {...route} /> ) }
          </Switch>
        </Router>
      </React.Fragment>
     )
  }
}
export default withContainer(App)