

import { machineCCKindAction } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'

export default id => {
  return new Promise((resolve,reject) => {
  Http(`${machineCCKindAction}/${id}`, 'get', false)
  .then(res => {
    dispatch('MACHINE_GET_EDIT_VALUE', res.body.data.text)
    resolve()
  })
  .catch(res => {
    reject()
    console.error(res)
  })
  })

}
