

import { machineAction } from '../commons/apis'
import store from '../commons/store'
import dispatch from './dispatch'
import Http from './Http'
import getMachineArr from './getMachineArr'


export default () => {
  const { delMachineId } = store.getState().machine
  Http(`${machineAction}/${delMachineId}`, 'del', true)
  .then(res => {
    dispatch('MACHINE_DEL_MACHINE_SUCCESS')
    getMachineArr()
  } )
  .catch(res => {
    dispatch('MACHINE_DEL_MACHINE_FAIL')
    console.error(res)
  })
}
