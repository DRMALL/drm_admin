

import { troubleAction } from '../commons/apis'
import Http from './Http'
import store from '../commons/store'
import dispatch from './dispatch'
import message from 'antd/lib/message'


export default e => {
  const { method } = e.currentTarget.dataset
  const { title, category, content } = store.getState().trouble
  if(title&&category&&content){
  let data = { title, category, content }
  Http( troubleAction, method, true, data )
  .then(res => dispatch('TROUBLE_ADD_RESET'))
  .catch(res => console.error(res))
  }
  else troubletTip()
}

function troubletTip(){
  message.warning('参数不完整，请全部输入后再提交！')
}
