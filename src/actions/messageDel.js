

import { messageDel } from '../commons/apis'
import dispatch from './dispatch'
import Httpid from './Httpid'
import getMessageArr from './getMessageArr'

export default id => {
  const token =localStorage.getItem('token')
  const api = `${messageDel}?id=${id}&token=${token}`
  dispatch('MESSAGE_DEL_MESSAGE_START')
  Httpid( api, 'post', true )
  .then(res => {
    dispatch('MESSAGE_DEL_MESSAGE_SUCCESS')
    getMessageArr()
  } )
  .catch( res => {
    console.error(res)
    dispatch('MESSAGE_DEL_MESSAGE_FAIL')
  } )
}
