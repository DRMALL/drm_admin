

import { partsAction } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'

export default (offset = 0) => {
  let url = `${partsAction}?offset=${offset}`
  Http(url, 'getWithQuery', false)
  .then(res => {
    dispatch('PART_GET_PART_ARR_SUCCESS', res.body)
  } )
  .catch( res => console.error(res) )
}
