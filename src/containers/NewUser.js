

import React, { Component } from 'react'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Button from 'antd/lib/button'
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
        <Row>
          <Col span={1} offset={3} ><Button onClick={ userResetInput } >清空</Button></Col>
          <Col span={1} offset={3} ><Button onClick={ addUser } >提交</Button></Col>
        </Row>
      </div>
      )
  }
}

