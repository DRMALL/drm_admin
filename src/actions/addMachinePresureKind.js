

import { machinePressureKindAction } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'
import store from '../commons/store'
import getMachinePresureKindArr from '../actions/getMachinePresureKindArr'
import message from 'antd/lib/message'
import notification from 'antd/lib/notification'


export default () => {
  const { presureKind } = store.getState().machine
  const data = { text: presureKind }
  if(presureKind){
  dispatch('MACHINE_KIND_NEW_MACHINE_KIND_START')
  Http(machinePressureKindAction, 'post', false, data)
  .then( res => {
    notification.success({
      message: '提示',
      description: '新增压力分类成功！'
    })
    getMachinePresureKindArr()
    dispatch('MACHINE_KIND_NEW_INPUT_RESET')
  })
  .catch( res => {
    console.error(res)
  } )
  }
  else {
    dispatch('MACHINE_KIND_SHORT_PARAMETER')
    message.warning(`请输入后再次尝试!!`)
  }

}

