
import { browserHistory } from 'react-router'
import { userAction } from '../commons/apis'
import request from 'superagent'

export default () => {
  const path = window.location.pathname
  const token = localStorage.getItem('token')
  console.log(path)
  if(path!=='/'){
    request
    .get(`${userAction}?token=${token}`)
    .then(res => {
      if(res.body.code===200) { console.log('啥都不做') }
      else NavToLogin()
    })
    .catch(res => {
      console.error(res)
      NavToLogin()
    })
  }
  else console.log('登录页',path)
  //
}

function NavToLogin(){
  browserHistory.push('/')
  localStorage.clear()
}

