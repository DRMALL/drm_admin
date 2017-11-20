

import { partRemark } from '../commons/apis'
import Httpid from './Httpid'
import store from '../commons/store'
// import MissWarn from '../utils/MissWarn'
import message from 'antd/lib/message'
import dispatch from './dispatch'
import { browserHistory } from 'react-router'


export default () => {
  const { machineId, remark } = store.getState().part
  return new Promise((resovle, reject) => {
  // if(machineId&&remark){
  if(remark){
    postRemark(remark)
    .then(res => resovle(res))
    .catch(res  => reject(res))
  }
  else {
    // let str = !remark ? '选择设备' : '添加备注'
    message.warning(`备注不能为空！`)
  }
  })

}

function postRemark(remark){
  return new Promise((resovle, reject) => {
  const token = localStorage.getItem('token')
  const partId = localStorage.getItem('partId')
  Httpid(`${partRemark}?partId=${partId}&token=${token}`, 'post', true, { remark })
  .then(res => {
    dispatch('PART_ADD_REMARK_SUCCESS')
    browserHistory.push('/parts')
    resovle('done')
  })
  .catch(res => {
    console.error(res)
    reject('done')
  })
})
}
