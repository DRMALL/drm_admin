

import { partRemark } from '../commons/apis'
import Httpid from './Httpid'
import store from '../commons/store'
import MissWarn from '../utils/MissWarn'
import dispatch from './dispatch'
import { browserHistory } from 'react-router'


export default () => {
  console.log('1')
  const { machineId, remark } = store.getState().part
  if(machineId&&remark){
    postRemark(machineId, remark)
  }
  else MissWarn()
}

function postRemark(machineId, remark){
  console.log('2')
  const token = localStorage.getItem('token')
  const partId = localStorage.getItem('partId')
  Httpid(`${partRemark}?partId=${partId}&token=${token}`, 'post', true, { deviceId:machineId, remark })
  .then(res => {
    dispatch('PART_ADD_REMARK_SUCCESS')
    browserHistory.push('/parts')
    console.log('3')
  })
  .catch(res => {
    console.log('5')
    console.error(res)
  })
}
