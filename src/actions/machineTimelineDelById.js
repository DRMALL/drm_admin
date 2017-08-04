

import { machineAction } from '../commons/apis'
import store from '../commons/store'
import dispatch from './dispatch'
import Httpid from './Httpid'
import getMachineById from './getMachineById'

export default () => {
  const { timeLineId } = store.getState().machine
  const token = localStorage.getItem('token')
  const machineId = localStorage.getItem('machineId')
  Httpid(`${machineAction}/${machineId}/timeline/del?lineId=${timeLineId}&token=${token}`, 'post', true)
  .then(res => {
    getMachineById(machineId)
    dispatch('MACHINE_DEL_TIMELLINE_SUCCESS')
  } )
  .catch(res => {
    console.error(res)
  })
}
