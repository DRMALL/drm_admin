

import Http from './Http'
import { troubleKindAction } from '../commons/apis'
import dispatch from './dispatch'

export default () => {
  return new Promise((resovle, reject) => {
    Http(troubleKindAction, 'get', false)
    .then(res => {
      const result = res.body.data
      result.sort(
        (a,b) => {
        return -(a.sortIndex - b.sortIndex)
      }
    )
      dispatch('TROUBLE_GET_TROUBLE_KIND_ARR', result)
      resovle()
    } )
    .catch(res => {
      reject()
      console.error(res)
    })
  })

}
