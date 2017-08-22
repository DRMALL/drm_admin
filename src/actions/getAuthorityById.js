

import { authEdit } from '../commons/apis'
import Httpid from './Httpid'
import dispatch from './dispatch'

export default id => {
  const token = localStorage.getItem('token')
  return new Promise((resolve, reject) => {
    Httpid(`${authEdit}?authId=${id}&token=${token}`, 'get', false)
    .then( res => {
      const result = res.body.data
      const obj = {}
      obj.userId = result.user ? result.user._id : ''
      obj.deviceId = result.device._id
      obj.canView = result.canView
      obj.canMonitor = result.canMonitor
      dispatch('AUTHORITY_GET_AUTHORITY_EDIT', [obj])
      resolve()
    } )
    .catch( res => {
      reject()
      console.error(res)
    } )
  })

}
