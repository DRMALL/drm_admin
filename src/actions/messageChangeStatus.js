

import Httpid from './Httpid'
import { messageEdit } from '../commons/apis'
import dispatch from './dispatch'
import getMessageArr from './getMessageArr'
import notification from 'antd/lib/notification'

export default messageId => {
  const token = localStorage.getItem('token')
  const api = `${messageEdit}?id=${messageId}&token=${token}`
  dispatch('MESSAGE_CHANGE_MESSAGE_STATUS_START')
  Httpid(api, 'post', false, { published: true })
  .then(res => {
    dispatch('MESSAGE_CHANGE_MESSAGE_STATUS_SUCCESS')
    dispatch('MESSAGE_SELECT_SEND_TRUE')
    notification.success({
      message: '提示',
      description: '发布成功!'
    })
    getMessageArr()
  } )
  .catch( res => {
    console.error(res)
    dispatch('MESSAGE_CHANGE_MESSAGE_STATUS_FAIL')
    notification.error({
      message: '提示',
      description: '发布失败!'
    })
  } )
}
