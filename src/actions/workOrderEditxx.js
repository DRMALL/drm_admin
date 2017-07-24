

import { workOrderAction } from '../commons/apis'
import Http from './Http'
import store from '../commons/store'
import dispatch from './dispatch'
import message from 'antd/lib/message'
import { browserHistory } from 'react-router'
import socket from './socket'


export default e => {
  const { advice } = store.getState().workOrder
  const id = localStorage.getItem('workOrderId')
  if(advice){
  let data = { advice }
  Http( `${workOrderAction}/${id}`, 'put', true, data )
  .then(res => {
    browserHistory.push('/workOrder')
    dispatch('WORKORDER_EDIT_RESET')
    socket()
})
  .catch(res => console.error(res))
  }
  else troubletTip()
}

function troubletTip(){
  message.warning('参数不完整，请全部输入后再提交！')
}
