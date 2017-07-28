

import { partsAction } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'

export default () => {
  Http(partsAction, 'get', false)
  .then(res => {
    dispatch('PART_GET_PART_ARR_SUCCESS', res.body.data)
  } )
  .catch( res => console.error(res) )
}
