

import { troubleAction } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'
// import changeTroubleType from '../utils/changeTroubleType'
import moment from 'moment'

export default (offset = 0) => {
  return new Promise((reslove, reject) => {
  Http(`${troubleAction}?offset=${offset}`, 'getWithQuery', false)
  .then(res => {
    const result = res.body
    result.data = result.data.map(item => {
      item.categoryxx = item.category ? item.category.text : null
      item.createdAtTime = moment(item.createdAt).format('YYYY-MM-DD HH:mm')
      return item
    })
    dispatch('TROUBLE_GET_TROUBLE_ARR', result )
    reslove()
  })
  .catch(res => {
    console.error('出错了')
    reject()
  })
  })

}
