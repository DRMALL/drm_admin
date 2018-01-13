

import { authorityAction } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'

export default (offset = 0) => {
  return new Promise((resolve,reject) => {
    let url = `${authorityAction}?offset=${offset}`
    Http(url, 'getWithQuery', false)
    .then(res => {
      dispatch('AUTHORITY_GET_AUTHORITY_SUCCESS', res.body)
      resolve()
    })
    .catch(res => {
      reject()
      console.error(res)
    })
  })
}
