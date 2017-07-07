
import React, { Component } from 'react'
import Input from 'antd/lib/input'
import Button from 'antd/lib/button'
import handleLogin from '../actions/handleLogin'
import getInputValue from '../actions/getInputValue'
import dispatch from '../actions/dispatch'


export default class App extends Component {
  componentDidMount() {
    dispatch('LOGIN_ON_LOAD')
  }
  render() {
    console.log(this.props.state.login)
    // const { password, user } = this.props.state.login
    return(
      <div className='login-container' >
        <div className='login-text' >用户名</div>
        <Input onChange={ getInputValue } data-id='admin' data-path='LOGIN' />
        <div className='login-text' >密码</div>
        <Input onChange={ getInputValue } data-id='password' data-path='LOGIN'
               onPressEnter={ handleLogin } type='password'
                />
        <Button onClick={ handleLogin } >登录</Button>
      </div>
      )
  }
}

