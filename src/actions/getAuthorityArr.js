

import { authorityAction } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'

export default () => {
  Http(authorityAction, 'get', false)
  .then(res => {
    dispatch('AUTHORITY_GET_AUTHORITY_SUCCESS', res.body.data)
  })
  .catch(res => console.error(res))
}
