

import { authorityNew } from '../commons/apis'
import Http from  './Http'
import store from '../commons/store'
import notification from 'antd/lib/notification'

export default () => {
  console.log('xxx')

  newAuth()
}

  function newAuth(num){
  const  { newAuthorityArr } = store.getState().authority
  console.log('执行')
  let a = newAuthorityArr.length
    let b = num ? num : 0
    Http(authorityNew, 'post', false, newAuthorityArr[b] )
    .then( res => {
      if(num < 6&&num<a) newAuth(num+1)
      else if(num+1===a)
        notification.success({
          message: '提示',
          description: '新增权限成功'
        })
      else console.log('出错了！！！！')
    } )
    .catch(res => {
      notification.error({
          message: '提示',
          description: '新增权限失败'
        })
    } )
  }
