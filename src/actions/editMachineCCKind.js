

import { machineCCKindAction } from '../commons/apis'
import store from '../commons/store'
import Http from './Http'
import getMachineCCKindArr from './getMachineCCKindArr'
import notification from 'antd/lib/notification'
import message from 'antd/lib/message'

export default ()=> {
  let {KindId, editValue } = store.getState().machine
  if(editValue){
    return new Promise((resovle, reject) => {
    Http(`${machineCCKindAction}/${KindId}`, 'put', false, { text:editValue })
    .then( res =>  {
      notification.success({
        message: '提示',
        description: '修改成功!'
      })
      getMachineCCKindArr()
      resovle(res)
    } )
    .catch(res  => {
      console.error(res)
      reject(res)
    } )
    })
  }
  else message.warning(`请输入后再次尝试!!`)

}
