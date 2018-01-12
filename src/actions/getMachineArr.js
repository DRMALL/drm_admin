

import Http from './Http'
import { machineAction } from '../commons/apis'
import dispatch from './dispatch'
import moment from 'moment'

export default (offset = 0) => {
  let url = `${machineAction}?offset=${offset}`
  Http(url, 'getWithQuery', false)
  .then(res =>{
    const result = res.body
     result.data = result.data.map(item => {
      item.createdAt = moment(item.createdAt).format('YYYY-MM-DD HH:mm')
      return item
     })
    dispatch('MACHINE_GET_MACHINE_ARR_SUCCESS', result)
  } )
  .catch(res => console.error(res) )
}
