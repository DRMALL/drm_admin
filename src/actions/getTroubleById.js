

import { troubleAction } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'


export default troubleId => {
  Http( `${troubleAction}/${troubleId}`, 'get', false )
  .then(res => {
    const result =res.body.data
    dispatch('TROUBLE_GET_TROUBLE_BY_ID', result )
  })
  .catch(res => console.error(res) )
}
