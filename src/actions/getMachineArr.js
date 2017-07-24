

import Http from './Http'
import { machineAction } from '../commons/apis'
import dispatch from './dispatch'
import moment from 'moment'

export default () => {
  Http(machineAction, 'get', false)
  .then(res =>{
    const result = res.body.data
     let a = result.map(item => {
      item.createdAt = moment(item.createdAt).format('YYYY-MM-DD HH:mm')
      return item
     })
    dispatch('MACHINE_GET_MACHINE_ARR_SUCCESS', a)
  } )
  .catch(res => console.error(res) )
}
