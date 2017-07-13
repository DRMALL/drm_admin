

import { workOrderAction } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'
import moment from 'moment'

export default () => {
  Http(workOrderAction, 'get', false)
  .then(res => {
    const result = res.body.data
    result.map(item => {
      item.createdAtTime = moment(item.createdAt).format('YYYY-MM-DD HH:mm')
      return item
    })

    dispatch('TROUBLE_GET_TROUBLE_ARR', result )
  })
}
