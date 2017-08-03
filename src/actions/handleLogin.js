
import { browserHistory } from 'react-router'
import { login } from '../commons/apis'
import request from 'superagent'
import store from '../commons/store'
import notification from 'antd/lib/notification'
import LoginWarn from '../utils/LoginWarn'
import dispatch from './dispatch'

export default () => {
  const { verify, verifyArr } = store.getState().login
  if(typeof verify === 'undefined') {
    notification.error({
      message: '提示',
      description: '请输入验证码'
    })
  }

  else {
    const arr = verifyArr.map(item => item= item.text)
  const str = arr.join('')
  console.log(str)
  if(verify.toLowerCase()===str.toLowerCase()) {
    loginxx()
  }
  else {
    notification.error({
      message: '提示',
      description: '验证码错误，请重新输入'
    })
  }
  }
}

function loginxx(){
  const { admin, password } = store.getState().login
  if(admin&&password){
    request
    .post(login)
    .send({ admin: admin, password: password })
    .then(res => {
      if(res.body.code===201) {
        localStorage.setItem('token', res.body.data)
        dispatch('LOGIN_SUCCESS_LOGIN')
        browserHistory.push('/message')
      }
      else loginFail()
    })
    .catch(res => {
      console.error(res)
      loginFail('err')
    })
  }
  else LoginWarn(admin)
}

function loginFail(e){
  if(e){
    notification.error({
      message: '提示',
      description: '网络错误'
    })
  }
  else{
    notification.error({
      message: '提示',
      description: '用户名或者密码错误'
    })
  }
}

