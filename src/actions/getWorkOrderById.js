

import { workOrderAction } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'


export default workOrderId => {
  Http( `${workOrderAction}/${workOrderId}`, 'get', false )
  .then(res => {
    const result =res.body.data
    dispatch('WORKORDER_GET_ORDER_BY_ID', result )
  })
  .catch(res => console.error(res) )
}
