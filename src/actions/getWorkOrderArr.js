

import { workOrderAction } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'
import moment from 'moment'

export default () => {
  Http(workOrderAction, 'get', false)
  .then(res => {
    const result = res.body.data
    result.map(item => {
      item.updatedAtTime = moment(item.updatedAt).format('YYYY-MM-DD HH:mm')
      item.isDone = item.isDone ? '已解决': '未解决'
      item.isHanlded = item.isHanlded ? '已处理': '未处理'
      return item
    })

    dispatch('WORKORDER_GET_ORDER_ARR', result )
  })
  .catch(res => console.error(res))
}
