

import Http from './Http'
import { userAction } from '../commons/apis'
import dispatch from './dispatch'
import moment from 'moment'

export default () => {
  Http( userAction, 'get', false )
  .then(res => {
      const result = res.body.data
      result.map((item, index) => {
        item.key = index
        item.time = moment(item.createdAt).format('YYYY-MM-DD')
        return item
      })
      dispatch( 'USER_GET_ALL_USERS' ,result)
  })
  .catch(res => { console.error(res) } )
}

