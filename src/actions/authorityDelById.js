

import { authDel } from '../commons/apis'
import getAuthorityArr from './getAuthorityArr'
import store from '../commons/store'
import Httpid from './Httpid'
import dispatch from './dispatch'

export default () => {
  const token = localStorage.getItem('token')
  const authId = store.getState().authority.authId
  return new Promise((resolve,reject) => {
  Httpid(`${authDel}?authId=${authId}&token=${token}`, 'post', true)
  .then(res => {
    dispatch('AUTHROITY_DEL_AUTH_SUCCESS')
    getAuthorityArr()
    resolve()
  })
  .catch(res => {
    dispatch('AUTHROITY_DEL_AUTH_FAIL')
    console.error(res)
    reject()
  })
  })

}
