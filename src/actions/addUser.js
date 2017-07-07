

import { newUser } from '../commons/apis'
import requset from 'superagent'
import dispatch from './dispatch'
import store from '../commons/store'
import notification from 'antd/lib/notification'
import { browserHistory } from 'react-router'
import resetLogin from './resetLogin'

export default () => {
  const { name, password, email, phone, company_name, address } = store.getState().user
  const token = localStorage.getItem('token')
  request
  .post(`${newUser}?token=${token}`)
  .send({ name, password, email, phone, company_name, address })
  .then( res => {
    if(res.body.code===201){
      addSuccess()
    }
    else if(res.body.code==402) resetLogin()
    else addFail()
  } )
  .catch( res => addFail(res) )
}

function addSuccess(){
  notification.success({
    message: '提示',
    description: '新增用户成功'
  })
  browserHistory.push('/user')
}

function addFail(res){
  if(a){
    notification.error({
      message: '提示',
      description: '网络错误，新增用户失败'
    })
    console.error(res)
  }
  else {
    notification.error({
      message: '提示',
      description: '新增用户失败'
    })
  }

}
