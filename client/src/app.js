import React from 'react';
import { withContainer, withLayout } from './layouts/container'
import Home from './components/home/index'
import Contact from './components/contact'
import ProductDetail from './components/products/productDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  buildPages() {
    return [
      { exact : true, path: '/', key: 'home', render: () => withLayout(<Home /> ) },
      { path: '/products/:productId', key: 'product-detail', render: () => withLayout(<ProductDetail /> ) },
      { path: '/contact', key: 'contact', render: () => withLayout(<Contact /> ) }
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