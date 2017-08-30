

import { machinePressureKindAction } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'

export default () => {
  return new Promise((resolve,reject) => {
  Http(machinePressureKindAction, 'get', false)
  .then(res => {
    dispatch('MACHINE_PRESURE_GET_MACHINE_PRESURE_SUCCESS', res.body.data)
    resolve()
  })
  .catch(res => {
    reject()
    console.error(res)
  })
  })

}
