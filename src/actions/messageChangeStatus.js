

import Httpid from './Httpid'
import { messageEdit } from '../commons/apis'
import dispatch from './dispatch'
import getMessageArr from './getMessageArr'

export default messageId => {
  const token = localStorage.getItem('token')
  const api = `${messageEdit}?id=${messageId}&token=${token}`
  dispatch('MESSAGE_CHANGE_MESSAGE_STATUS_START')
  Httpid(api, 'post', true, { published: true })
  .then(res => {
    dispatch('MESSAGE_CHANGE_MESSAGE_STATUS_SUCCESS')
    getMessageArr()
  } )
  .catch( res => {
    console.error(res)
    dispatch('MESSAGE_CHANGE_MESSAGE_STATUS_FAIL')
  } )
}
