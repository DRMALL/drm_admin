

import { authorityPut } from '../commons/apis'
import Httpid from './Httpid'
import store from '../commons/store'
import dispatch from './dispatch'
import { browserHistory } from 'react-router'
import message from 'antd/lib/message'

export default () => {
  const token =localStorage.getItem('token')
  const id = localStorage.getItem('authId')
  const { newAuthorityArr } = store.getState().authority
  let obj = {}
  obj.user = newAuthorityArr[0].userId
  obj.device = newAuthorityArr[0].deviceId
  obj.canView = newAuthorityArr[0].canView
  obj.canMonitor = newAuthorityArr[0].canMonitor
  if(!obj.user){
    message.warning('请选择用户后再提交修改！！')
  }
  else if(!obj.device||!obj.canView){
    message.warning('权限至少选择一种！')
  }
  else {
    return new Promise((resovle, reject) =>{
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


}
