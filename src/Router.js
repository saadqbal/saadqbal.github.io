import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Blog from './Containers/Blog'
import BlogPost from './Containers/BlogPost'
import Footer from './Components/Footer/Footer'
var createBrowserHistory = require('history').createBrowserHistory
const history = createBrowserHistory()

const RouterCom = ({ theme }) => {
  console.log("THEME=", theme)
  
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Blog} />
        <Route exact path='/blog/:title/:issueNumber' component={BlogPost} />
      </Switch>
      <Footer theme={theme} />
    </Router>
  )
}

export default RouterCom
