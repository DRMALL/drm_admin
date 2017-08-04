

import { machineAction } from '../commons/apis'
import store from '../commons/store'
import dispatch from './dispatch'
import Httpid from './Httpid'
import getMachineArr from './getMachineArr'

export default () => {
  const { timeLineId } = store.getState().machine
  const token = localStorage.getItem('token')
  Httpid(`${machineAction}?lineId=${timeLineId}&token=${token}`, 'post', true)
  .then(res => {
    dispatch('MACHINE_DEL_MACHINE_SUCCESS')
    getMachineArr()
  } )
  .catch(res => {
    console.error(res)
  })
}
