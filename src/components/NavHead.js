

import React from 'react'
import handleLogout from '../actions/handleLogout'

const NavHead = () => (
  <div className='nav-head-container' >
      <div className='nav-head-left nav-head-block' >admin</div>
      <div className='nav-hed-right nav-head-block' onClick={ handleLogout }  >退出</div>
  </div>
  )

export default NavHead
