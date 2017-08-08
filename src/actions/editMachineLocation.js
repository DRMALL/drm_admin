

import { machineAction } from '../commons/apis'
import Http from './Http'

export default address => {
  console.log(address)
  let id = localStorage.getItem('machineId')
  return new Promise((resovle, reject) => {
  Http(`${machineAction}/${id}/location`, 'put', false, { address })
  .then( res =>  {
    console.log(res)
    resovle(res)
  } )
  .catch(res  => {
    console.error(res)
    reject(res)
  } )
  })

}
