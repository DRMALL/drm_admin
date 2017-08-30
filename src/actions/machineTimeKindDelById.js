

import { machineTimelineKindAction } from '../commons/apis'
import store from '../commons/store'
import dispatch from './dispatch'
import Http from './Http'
import getMachineTimeKindArr from './getMachineTimeKindArr'
import notification from 'antd/lib/notification'


export default () => {
  const { KindId } = store.getState().machine
  Http(`${machineTimelineKindAction}/${KindId}`, 'del', false)
  .then(res => {
    notification.success({
      message: '提示',
      description: '删除时间分类成功！'
    })
    dispatch('MACHINE_KIND_DEL_MACHINE_KIND_SUCCESS')
    getMachineTimeKindArr()
  } )
  .catch(res => {
    dispatch('MACHINE_KIND_DEL_MACHINE_KIND_FAIL')
    console.error(res)
  })
}
