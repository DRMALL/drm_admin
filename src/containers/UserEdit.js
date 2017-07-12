

import React, { Component } from 'react'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Button from 'antd/lib/button'
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
        <Row>
          <Col span={1} offset={3} ><Button onClick={ userResetInput } >清空</Button></Col>
          <Col span={1} offset={3} ><Button onClick={ putUser } >提交修改</Button></Col>
        </Row>
      </div>
      )
  }
}

