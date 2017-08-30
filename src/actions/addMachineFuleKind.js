

import { machineFuleKindAction } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'
import store from '../commons/store'
import getMachineFuleKindArr from '../actions/getMachineFuleKindArr'
import message from 'antd/lib/message'
import notification from 'antd/lib/notification'


export default () => {
  const { fuleKind } = store.getState().machine
  const data = { text: fuleKind }
  if(fuleKind){
  dispatch('MACHINE_KIND_NEW_MACHINE_KIND_START')
  Http(machineFuleKindAction, 'post', false, data)
  .then( res => {
    notification.success({
      message: '提示',
      description: '新增燃料分类成功！'
    })
    getMachineFuleKindArr()
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

