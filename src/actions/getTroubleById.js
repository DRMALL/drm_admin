

import { troubleAction } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'


export default troubleId => {
  return new Promise((resolve, reject) => {
    Http( `${troubleAction}/${troubleId}`, 'get', false )
    .then(res => {
      const result =res.body.data
      result.categoryxx = result.category._id
      dispatch('TROUBLE_GET_TROUBLE_BY_ID', result )
      resolve()
    })
    .catch(res => reject() )
  })

}
