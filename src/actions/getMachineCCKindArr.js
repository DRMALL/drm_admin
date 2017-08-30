

import { machineCCKindAction } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'

export default () => {
  return new Promise((resolve,reject) => {
  Http(machineCCKindAction, 'get', false)
  .then(res => {
    dispatch('MACHINE_CC_GET_MACHINE_CC_SUCCESS', res.body.data)
    resolve()
  })
  .catch(res => {
    reject()
    console.error(res)
  })
  })

}
