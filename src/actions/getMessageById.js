

import { messageOne } from '../commons/apis'
import dispatch from './dispatch'
import Httpid from './Httpid'

export default messageId => {
  dispatch('MESSAGE_GET_ONE_MESSAGE_START')
  const token = localStorage.getItem('token')
  const api = `${messageOne}?id=${messageId}&token=${token}`
  Httpid( api, 'get', false )
  .then(res => {
    const result = res.body.data
    delete result.createdAt
    delete result.updatedAt
    result.fileList = result.images.map((item, index) => {
      item.status = 'done'
      item.uid = '-'+index
      return item
    })
    dispatch('MESSAGE_GET_ONE_MESSAGE_SUCCESS', result )
  })
  .catch( res => {
    dispatch('MESSAGE_GET_ONE_MESSAGE_FAIL')
    console.error(res)
  } )
}
