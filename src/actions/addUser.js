

import { newUser } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'
import store from '../commons/store'
// import MissWarn from '../utils/MissWarn'
import message from 'antd/lib/message'


export default () => {
  const { name, password, email, phone, company_name, address } = store.getState().user
  const data = { name, password, email, phone, company_name, address }
  if(!(!name||!password||!email||!phone||!company_name||!address)){
  dispatch('USER_NEW_USER_START')
  Http(newUser, 'post', true, data)
  .then( res => dispatch('USER_NEW_INPUT_RESET') )
  .catch( res => console.error(res) )
  }
  else {
    dispatch('USER_SHORT_PARAMETER')
    let str = !name ? '用户名' : !password ? '密码' : !email ? '用户邮箱' : !phone ? '手机号码' : !company_name ? '公司名称' : '公司地址'
    message.warning(`请输入${str}后再次尝试!!`)
  }

}

