

import { machineCCKindAction } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'
import store from '../commons/store'
import getMachineCCKindArr from '../actions/getMachineCCKindArr'
import message from 'antd/lib/message'
import notification from 'antd/lib/notification'


export default () => {
  const { CCKind } = store.getState().machine
  const data = { text: CCKind }
  if(CCKind){
  dispatch('MACHINE_KIND_NEW_MACHINE_KIND_START')
  Http(machineCCKindAction, 'post', false, data)
  .then( res => {
    notification.success({
      message: '提示',
      description: '新增排量分类成功！'
    })
    getMachineCCKindArr()
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

