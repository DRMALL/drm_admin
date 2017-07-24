

import React from 'react'
import { Router, Route, browserHistory, IndexRoute  } from 'react-router'
import App from './App'
import Login from './Login'
import User from './User'
import NewUser from './NewUser'
import UserEdit from './UserEdit'
import Machine from './Machine'
import MachineNew from './MachineNew'
import Message from './Message'
import MessageNew from './MessageNew'
import MessageEdit from './MessageEdit'
import Parts from './Parts'
import Trouble from './Trouble'
import TroubleNew from './TroubleNew'
import TroubleEdit from './TroubleEdit'
import TroubleKind from './TroubleKind'
import WorkOrder from './WorkOrder'
import WorkOrderEdit from './WorkOrderEdit'
import Authority from './Authority'
import AuthorityNew from './AuthorityNew'
import Nav from '../components/Nav'
import NoMatch from './NoMatch'

export default () => (
  <Router history={ browserHistory } >
    <Route path='/' component={ App } >
      <Route path='login' component={ Login } />
      <Route component={ Nav } >
        <IndexRoute component={ Message } />
        <Route path='user' component={ User } />
        <Route path='user/new' component={ NewUser } />
        <Route path='user/edit' component={ UserEdit } />
        <Route path='authority' component={ Authority } />
        <Route path='authority/new' component={ AuthorityNew } />
        <Route path='machine' component={ Machine } />
        <Route path='machine/new' component={ MachineNew } />
        <Route path='message' component={ Message } />
        <Route path='message/new' component={ MessageNew } />
        <Route path='message/edit' component={ MessageEdit } />
        <Route path='parts' component={ Parts } />
        <Route path='trouble' component={ Trouble } />
        <Route path='trouble/new' component={ TroubleNew } />
        <Route path='trouble/edit' component={ TroubleEdit } />
        <Route path='trouble/kind' component={ TroubleKind } />
        <Route path='workOrder' component={ WorkOrder } />
        <Route path='workOrder/edit' component={ WorkOrderEdit } />
      </Route>
      <Route path='*' component={ NoMatch } />
    </Route>
  </Router>
  )
