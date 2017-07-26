

import dispatch from './dispatch'
import store from '../commons/store'

export default () => {
  const { newAuthorityArr } = store.getState().authority
  let arr = newAuthorityArr.map(item => {
    item.userId = ''
    item.deviceId = ''
    item.canView = false
    item.canMonitor = false
    return item
  })
  dispatch('AUTHORITY_NEW_AUTHORITY_RESET', arr)
}
