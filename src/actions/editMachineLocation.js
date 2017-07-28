

import { machineAction } from '../commons/apis'
import Http from './Http'

export default address => {
  console.log(address)
  let id = localStorage.getItem('machineId')
  Http(`${machineAction}/${id}/location`, 'put', false, { address })
  .then( res =>  console.log(res) )
  .catch(res  => console.error(res) )
}
