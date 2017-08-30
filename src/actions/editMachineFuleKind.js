

import { machineFuleKindAction } from '../commons/apis'
import store from '../commons/store'
import Http from './Http'
import getMachineFuleKindArr from './getMachineFuleKindArr'
import notification from 'antd/lib/notification'
import message from 'antd/lib/message'

export default ()=> {
  let {KindId, editValue } = store.getState().machine
  if(editValue){
    return new Promise((resovle, reject) => {
    Http(`${machineFuleKindAction}/${KindId}`, 'put', false, { text:editValue })
    .then( res =>  {
      notification.success({
        message: '提示',
        description: '修改成功!'
      })
      getMachineFuleKindArr()
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
