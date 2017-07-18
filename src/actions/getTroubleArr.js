

import { troubleAction } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'
// import changeTroubleType from '../utils/changeTroubleType'
import moment from 'moment'

export default () => {
  Http(troubleAction, 'get', false)
  .then(res => {
    const result = res.body.data
    result.map(item => {
      item.categoryxx = item.category.name
      item.createdAtTime = moment(item.createdAt).format('YYYY-MM-DD HH:mm')
      return item
    })

    dispatch('TROUBLE_GET_TROUBLE_ARR', result )
  })
}