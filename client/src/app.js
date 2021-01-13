import React from 'react';
import { withContainer, withLayout } from './layouts/container'
import Home from './components/home/index'
import Contact from './components/contact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  buildPages() {
    return [
      { exact : true, path: '/', key: 'home', render: () => withLayout(<Home /> ) },
      { path: '/home', key: 'home', render: () => withLayout(<Home /> ) },
      { path: '/contact', key: 'about', render: () => withLayout(<Contact /> ) }
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