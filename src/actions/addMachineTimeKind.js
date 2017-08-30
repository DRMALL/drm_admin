

import { machineTimelineKindAction } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'
import store from '../commons/store'
import getMachineTimeKindArr from '../actions/getMachineTimeKindArr'
import message from 'antd/lib/message'
import notification from 'antd/lib/notification'


export default () => {
  const { timelineKind } = store.getState().machine
  const data = { text: timelineKind }
  if(timelineKind){
  dispatch('MACHINE_KIND_NEW_MACHINE_KIND_START')
  Http(machineTimelineKindAction, 'post', false, data)
  .then( res => {
    notification.success({
      message: '提示',
      description: '新增时间分类成功！'
    })
    getMachineTimeKindArr()
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

