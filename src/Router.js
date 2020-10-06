import React from 'react'
import { HashRouter, Switch, Route } from "react-router-dom";

import Blog from './Containers/Blog'
import BlogPost from './Containers/BlogPost'
import Footer from './Components/Footer/Footer'
var createBrowserHistory = require('history').createBrowserHistory
const history = createBrowserHistory()

const RouterCom = ({ theme }) => {
  return (
    <HashRouter history={history}>
      <Switch>
        <Route exact path='/' component={Blog} />
        <Route exact path='/blog/:title/:issueNumber' component={BlogPost} />
      </Switch>
      <Footer theme={theme} />
    </HashRouter>
  )
}

export default RouterCom
