

import { newUser } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'
import store from '../commons/store'
import message from 'antd/lib/message'


export default () => {
  const { name, password, email, phone, company_name, address } = store.getState().user
  const data = { name, password, email, phone, company_name, address }
  if(name&password&email&phone&company_name&address){
  Http(newUser, 'post', true, data)
  .then( res => dispatch('USER_NEW_INPUT_RESET') )
  .catch( res => console.error(res) )
  }
  else addUserTip()

}

function addUserTip(){
  message.warning('缺少必要的参数，请填写完整后再次尝试！')
}
