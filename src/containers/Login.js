
import React, { Component } from 'react'
import Input from 'antd/lib/input'
// import Button from 'antd/lib/button'
import handleLogin from '../actions/handleLogin'
import getInputValue from '../actions/getInputValue'
import dispatch from '../actions/dispatch'
import VerifyImg from '../components/VerifyImg'
import LoginIcon from '../images/logo@3x.png'


export default class App extends Component {
  componentDidMount() {
    dispatch('LOGIN_ON_LOAD')
  }
  render() {
    return(
      <div className='login-bg' >
        <div className='login-container' >
          <div className='login-text' >用户名</div>
          <Input onChange={ getInputValue } data-id='admin' data-path='LOGIN'
                 style={{ backgroundColor: '#cce3ff', fontSize:16 }} />
          <div className='login-text' >密码</div>
          <Input onChange={ getInputValue } data-id='password' data-path='LOGIN'
                 type='password' onPressEnter={ handleLogin }
                 style={{ backgroundColor: '#cce3ff', fontSize:16 }}
                  />
          <div className='login-verify' >
            <div>
              <div className='login-text' >验证码</div>
              <Input onChange={ getInputValue } data-id='verify' data-path='LOGIN'
                     onPressEnter={ handleLogin }
                     style={{ backgroundColor: '#cce3ff', width:100, fontSize:16 }}
                      />
            </div>
            <VerifyImg { ...this.props } />
          </div>
          <div onClick={ handleLogin } className='login-button' >登录</div>
        </div>
        <img src={ LoginIcon } alt='login_icon' className='login-icon' />
      </div>
      )
  }
}

