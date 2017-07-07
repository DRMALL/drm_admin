
import { browserHistory } from 'react-router'
import { login } from '../commons/apis'
import request from 'superagent'
import store from '../commons/store'
import notification from 'antd/lib/notification'

export default () => {
  const { admin, password } = store.getState().login
  console.log(window.location.pathname)
  if(admin&&password){
    request
    .post(login)
    .send({ admin: admin, password: password })
    .then(res => {
      if(res.body.code===201) {
        localStorage.setItem('token', res.body.data)
        browserHistory.push('/user')
      }
      else loginFail()
    })
    .catch(res => {
      console.error(res)
      loginFail('err')
    })
  }
  else loginWarn(admin, password)
  // browserHistory.push('/user')
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

function loginWarn(admin, password){
  if(!admin){
      notification.warning({
        message: '提示',
        description: '请输入用户名'
  })
  }
  else {
      notification.warning({
        message: '提示',
        description: '请输入密码'
  })
  }
}
