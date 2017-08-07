
import React, { Component } from 'react'
import Input from 'antd/lib/input'
import Button from 'antd/lib/button'
import handleLogin from '../actions/handleLogin'
import getInputValue from '../actions/getInputValue'
import dispatch from '../actions/dispatch'
import VerifyImg from '../components/VerifyImg'


export default class App extends Component {
  componentDidMount() {
    dispatch('LOGIN_ON_LOAD')
  }
  render() {
    return(
      <div className='login-container' >
        <div className='login-text' >用户名</div>
        <Input onChange={ getInputValue } data-id='admin' data-path='LOGIN' />
        <div className='login-text' >密码</div>
        <Input onChange={ getInputValue } data-id='password' data-path='LOGIN'
               type='password' onPressEnter={ handleLogin }
                />
        <div className='login-text' >验证码</div>
        <Input onChange={ getInputValue } data-id='verify' data-path='LOGIN'
               onPressEnter={ handleLogin }
                />
        <VerifyImg { ...this.props } />
        <Button onClick={ handleLogin } >登录</Button>
      </div>
      )
  }
}

