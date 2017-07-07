

import React from 'react'
import Icon from 'antd/lib/icon'
import { Link } from 'react-router'

const userHead = () => (
  <div className='user-head' >
    <div className='user-head-left' >用户管理</div>
    <Link to='/user/new' className='user-head-right' >
      <div className='user-head-right-block' ><Icon type="plus" /></div>
      <div className='user-head-right-text' >添加新用户</div>
    </Link>
  </div>
  )

export default userHead
