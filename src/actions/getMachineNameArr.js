

import dispatch from './dispatch'
import Httpid from './Httpid'
import { machineAction } from '../commons/apis'

export default () => {
  const token = localStorage.getItem('token')
  Httpid( `${machineAction}?type=name&token=${token}`, 'get', false )
  .then(res => {
    dispatch('AUTHORITY_GET_MACHINE_NAME', res.body.data)
  })
  .catch(res => console.error(res))
}
