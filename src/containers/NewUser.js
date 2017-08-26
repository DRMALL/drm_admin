

import React, { Component } from 'react'
// import Row from 'antd/lib/row'
// import Col from 'antd/lib/col'
// import Button from 'antd/lib/button'
import userResetInput from '../actions/userResetInput'
import addUser from '../actions/addUser'
import UserInfoInput from '../components/UserInfoInput'
import getUserArr from '../actions/getUserArr'


export default class User extends Component {
  componentDidMount() {
    getUserArr()
  }
  render() {
    return(
      <div className='new-user-container' >
        <div className='new-user-title' >添加用户</div>
        <UserInfoInput { ...this.props } />
        <div className='new-user-button'>
          <div className='machine-edit-btns'  onClick={ userResetInput } >清空</div>
          <div className='machine-edit-btn'  onClick={ addUser }>提交</div>
        </div>
      </div>
      )
  }
}

