

import { machineFuleKindAction } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'

export default () => {
  return new Promise((resolve,reject) => {
  Http(machineFuleKindAction, 'get', false)
  .then(res => {
    dispatch('MACHINE_FULE_GET_MACHINE_FULE_SUCCESS', res.body.data)
    resolve()
  })
  .catch(res => {
    reject()
    console.error(res)
  })
  })

}
