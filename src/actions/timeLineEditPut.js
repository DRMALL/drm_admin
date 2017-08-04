

import { machineAction } from '../commons/apis'
import Httpid from './Httpid'
import store from '../commons/store'
import MissWarn from '../utils/MissWarn'
import { browserHistory } from 'react-router'
import dispatch from './dispatch'
import moment from 'moment'


export default () => {
  const { machine } = store.getState()
      , { editTimeline } = machine
      , line_time =moment(getValue(machine.line_time,editTimeline.line_time)).format('YYYY-MM-DD')
      , line_type = getValue(machine.line_type,editTimeline.line_type)
      , line_des = getValue(machine.line_des,editTimeline.line_des)
      , lineId = editTimeline._id
      console.log(line_type&&line_des&&line_time)
      console.log(line_type,line_des,line_time)
  if(line_type&&line_des&&line_time){
  putTime(line_type, line_des, line_time, lineId)
  }
  else MissWarn()
}

function getValue(a, b){
  let c = a ? a : b
  return c
}

function putTime(line_type, line_des, line_time, lineId){
  console.log('xxxx')
  const token = localStorage.getItem('token')
  const machineId = localStorage.getItem('machineId')
  Httpid(`${machineAction}/${machineId}/timeline/update?token=${token}`, 'put', true , { line_type, line_des, line_time: line_time, lineId })
  .then(res => {
    dispatch('MACHINE_PUT_TIMELINE_SUCCESS')
    browserHistory.push('/machine/edit')
  })
  .catch(res => {
    console.error(res)
  })
}
