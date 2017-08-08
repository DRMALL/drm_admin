

import { newAuthority } from '../commons/apis'
import Http from  './Http'
import store from '../commons/store'
import notification from 'antd/lib/notification'
import dispatch from './dispatch'
import arrHaveValue from '../utils/arrHaveValue'
import message from 'antd/lib/message'

export default () => {
  return new Promise((resolve, reject) => {
    newAuth()
    .then(() => resolve() )
    .catch(() => reject() )
  })

}

  function newAuth(num){
  return new Promise((resolve, reject) => {
  const  { newAuthorityArr } = store.getState().authority
  if(arrHaveValue(newAuthorityArr)){
  let a = newAuthorityArr.length
    let b = num ? num : 0
    Http(newAuthority, 'post', false, newAuthorityArr[b] )
    .then( res => {
      if(b < 20&&b+1<a){
        newAuth(b+1)
      }
      else if(b+1===a){
        notification.success({
          message: '提示',
          description: '新增权限成功'
        })
        dispatch('AUTHORITY_NEW_AUTHORITY_SUCCESS')
        resolve()
      }
      else {
        console.error('出错了！！！！')
        reject()
      }
    } )
    .catch(res => {
      notification.error({
          message: '提示',
          description: `新增第${b+1}个权限失败`
        })
      reject()
    } )
  }
  else return message.warning('参数不全，请填写完整后再次尝试！')
  })

  }


