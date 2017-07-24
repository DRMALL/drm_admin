

import { troubleAction } from '../commons/apis'
import Http from './Http'
import store from '../commons/store'
import dispatch from './dispatch'
import message from 'antd/lib/message'
import { browserHistory } from 'react-router'


export default e => {
  const { title, categoryxx, content } = store.getState().trouble
  const id = localStorage.getItem('troubleId')
  if(title&&categoryxx&&content){
  let category = categoryxx
  let data = { title, category, content }
  Http( `${troubleAction}/${id}`, 'put', true, data )
  .then(res => {
    browserHistory.push('/trouble')
    dispatch('TROUBLE_ADD_RESET')
})
  .catch(res => console.error(res))
  }
  else troubletTip()
}

function troubletTip(){
  message.warning('参数不完整，请全部输入后再提交！')
}
