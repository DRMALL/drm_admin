

import { machineTimelineKindAction } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'

export default () => {
  return new Promise((resolve,reject) => {
  Http(machineTimelineKindAction, 'get', false)
  .then(res => {
    dispatch('MACHINE_TIME_GET_MACHINE_TIME_SUCCESS', res.body.data)
    resolve()
  })
  .catch(res => {
    reject()
    console.error(res)
  })
  })

}
