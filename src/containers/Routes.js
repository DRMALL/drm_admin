

import React from 'react'
import { Router, Route, browserHistory, IndexRoute  } from 'react-router'
import App from './App'
import Login from './Login'
import User from './User'
import NewUser from './NewUser'
import UserEdit from './UserEdit'
import Machine from './Machine'
import Message from './Message'
import MessageNew from './MessageNew'
import Parts from './Parts'
import Trouble from './Trouble'
import WorkOrder from './WorkOrder'
import Authority from './Authority'
import AuthorityNew from './AuthorityNew'
import Nav from '../components/Nav'
import NoMatch from './NoMatch'

export default () => (
  <Router history={ browserHistory } >
    <Route path='/' component={ App } >
      <IndexRoute component={ Login } />
      <Route path='login' component={ Login } />
      <Route component={ Nav } >
        <Route path='user' component={ User } />
        <Route path='user/new' component={ NewUser } />
        <Route path='user/edit' component={ UserEdit } />
        <Route path='authority' component={ Authority } />
        <Route path='authority/new' component={ AuthorityNew } />
        <Route path='machine' component={ Machine } />
        <Route path='message' component={ Message } />
        <Route path='message/new' component={ MessageNew } />
        <Route path='parts' component={ Parts } />
        <Route path='trouble' component={ Trouble } />
        <Route path='workOrder' component={ WorkOrder } />
      </Route>
      <Route path='*' component={ NoMatch } />
    </Route>
  </Router>
  )
