

import Http from './Http'
import { userAction } from '../commons/apis'
import { browserHistory } from 'react-router'
// import dispatch from './dispatch'
import store from '../commons/store'
import getUserArr from '../actions/getUserArr'
import message from 'antd/lib/message'

export default () => {
  const { name, password, email, phone, company_name, address } = store.getState().user
  let data = password ? { name, password, email, phone, company_name, address } :
   { name, email, phone, company_name, address }
  const userId = localStorage.getItem('userId')
  if(!name) message.warning('请输入用户名！！')
  else if(!email) message.warning('请输入邮箱！！')
  else if(!phone) message.warning('请输入手机号或者电话号码！！')
  else if(!company_name) message.warning('请输入公司名称！！')
  else if(!address) message.warning('请输入公司地址！！')
  else {
      Http( `${userAction}/${userId}`, 'put', true, data )
      .then(res => {
        getUserArr()
        browserHistory.push('/user')
    })
      .catch(res => console.error(res) )
  }

}
