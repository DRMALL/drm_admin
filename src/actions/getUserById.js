

import dispatch from './dispatch'
import request from 'superagent'
import { userAction } from '../commons/apis'
import resetLogin from './resetLogin'

export default id => {
  const token = localStorage.getItem('token')
  request
  .get(`${userAction}/${id}?token=${token}`)
  .then(res => {
    if(res.body.code===200) {
      dispatch('USER_GET_USER_INFO_BY_ID', res.body.data )
    }
    else if(res.body.code ===402) resetLogin()
    else console.error(res)
  } )
  .catch(res => console.error(res) )
}
