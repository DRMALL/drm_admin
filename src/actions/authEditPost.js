

import { authorityPut } from '../commons/apis'
import Httpid from './Httpid'
import store from '../commons/store'
import dispatch from './dispatch'
import { browserHistory } from 'react-router'

export default () => {
  return new Promise((resovle, reject) =>{
  const token =localStorage.getItem('token')
  const id = localStorage.getItem('authId')
  const { newAuthorityArr } = store.getState().authority
  let obj = {}
  obj.user = newAuthorityArr[0].userId
  obj.device = newAuthorityArr[0].deviceId
  obj.canView = newAuthorityArr[0].canView
  obj.canMonitor = newAuthorityArr[0].canMonitor
  Httpid(`${authorityPut}?authId=${id}&token=${token}`, 'post', true, obj )
  .then(res => {
    browserHistory.push('/authority')
    dispatch('AUTHORITY_EDIT_POST_SUCCESS')
    resovle('done')
  } )
  .catch(res => {
    console.error(res)
    reject('done')
  } )
  })

}
