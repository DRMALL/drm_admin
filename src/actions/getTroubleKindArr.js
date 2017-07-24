

import Http from './Http'
import { troubleKindAction } from '../commons/apis'
import dispatch from './dispatch'

export default () => {
  Http(troubleKindAction, 'get', false)
  .then(res => {
    const result = res.body.data
    result.sort(
      (a,b) => {
      return -(a.sortIndex - b.sortIndex)
    }
  )
    dispatch('TROUBLE_GET_TROUBLE_KIND_ARR', result)
  } )
  .catch(res => console.error(res))
}
