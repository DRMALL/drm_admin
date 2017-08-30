

import { machineTimelineKindAction } from '../commons/apis'
import store from '../commons/store'
import Http from './Http'
import getMachineTimeKindArr from './getMachineTimeKindArr'
import notification from 'antd/lib/notification'
import message from 'antd/lib/message'

export default ()=> {
  let {KindId, editValue } = store.getState().machine
  if(editValue){
    return new Promise((resovle, reject) => {
    Http(`${machineTimelineKindAction}/${KindId}`, 'put', false, { text:editValue })
    .then( res =>  {
      notification.success({
        message: '提示',
        description: '修改成功!'
      })
      getMachineTimeKindArr()
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
