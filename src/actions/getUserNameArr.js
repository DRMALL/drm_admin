

import dispatch from './dispatch'
import Httpid from './Httpid'
import { userAction } from '../commons/apis'

export default () => {
  const token = localStorage.getItem('token')
  Httpid( `${userAction}?type=name&token=${token}`, 'get', false )
  .then(res => {
    dispatch('AUTHORITY_GET_NUSER_NAME', res.body.data)
  })
  .catch(res => console.error(res))
}
