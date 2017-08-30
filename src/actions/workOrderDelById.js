

import { workOrderAction } from '../commons/apis'
import store from '../commons/store'
import dispatch from './dispatch'
import Http from './Http'
import getWorkOrderArr from './getWorkOrderArr'
import notification from 'antd/lib/notification'


export default () => {
  const { workOrderId } = store.getState().workOrder
  Http(`${workOrderAction}/${workOrderId}`, 'del', false)
  .then(res => {
    dispatch('WORKORDER_DEL_WORKORDER_SUCCESS')
    notification.success({
      message: '提示',
      description: '删除成功！'
    })
    getWorkOrderArr()
  } )
  .catch(res => {
    dispatch('WORKORDER_DEL_WORKORDER_FAIL')
    console.error(res)
  })
}
