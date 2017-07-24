

import { troubleAction } from '../commons/apis'
import Http from './Http'
import store from '../commons/store'
import dispatch from './dispatch'
import message from 'antd/lib/message'


export default e => {
  const { method } = e.currentTarget.dataset
  const { title, categoryxx, content } = store.getState().trouble
  if(title&&categoryxx&&content){
  let category = categoryxx
  let data = { title, category, content }
    console.log(data)
  Http( troubleAction, method, true, data )
  .then(res => dispatch('TROUBLE_ADD_RESET'))
  .catch(res => console.error(res))
  }
  else troubletTip()
}

function troubletTip(){
  message.warning('参数不完整，请全部输入后再提交！')
}
