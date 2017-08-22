

import { authorityAction } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'

export default () => {
  return new Promise((resolve,reject) => {
  Http(authorityAction, 'get', false)
  .then(res => {
    dispatch('AUTHORITY_GET_AUTHORITY_SUCCESS', res.body.data)
    resolve()
  })
  .catch(res => {
    reject()
    console.error(res)
  })
  })

}
