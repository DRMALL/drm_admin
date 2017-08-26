

import React, { Component } from 'react'
// import Row from 'antd/lib/row'
// import Col from 'antd/lib/col'
// import Button from 'antd/lib/button'
import userResetInput from '../actions/userResetInput'
import putUser from '../actions/putUser'
import UserInfoInput from '../components/UserInfoInput'
import getUserById from '../actions/getUserById'


export default class UserEdit extends Component {
  componentDidMount() {
    getUserById(localStorage.getItem('userId'))
  }
  render() {
    return(
      <div className='new-user-container' >
        <div className='new-user-title' >修改用户</div>
        <UserInfoInput { ...this.props } />
        <div className='new-user-button'>
          <div className='machine-edit-btns' onClick={ userResetInput } >清空</div>
          <div className='machine-edit-btn' onClick={ putUser } >修改</div>
        </div>
      </div>
      )
  }
}

