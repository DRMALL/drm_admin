

import { machineFuleKindAction } from '../commons/apis'
import store from '../commons/store'
import dispatch from './dispatch'
import Http from './Http'
import getMachineFuleKindArr from './getMachineFuleKindArr'
import notification from 'antd/lib/notification'


export default () => {
  const { KindId } = store.getState().machine
  Http(`${machineFuleKindAction}/${KindId}`, 'del', false)
  .then(res => {
    notification.success({
      message: '提示',
      description: '删除燃料分类成功！'
    })
    dispatch('MACHINE_KIND_DEL_MACHINE_KIND_SUCCESS')
    getMachineFuleKindArr()
  } )
  .catch(res => {
    dispatch('MACHINE_KIND_DEL_MACHINE_KIND_FAIL')
    console.error(res)
  })
}
