

import { messageAll } from '../commons/apis'
import dispatch from './dispatch'
import Http from './Http'
import moment from 'moment'
import store from '../commons/store'


export default offset => {
  let url = offset ? `${messageAll}?published=false&offset=${offset}` : `${messageAll}?published=false`
  const { messageSelect } = store.getState().message
  dispatch('MESSAGE_GET_MESSAGE_UNPUBLISHED_START')
  Http( url, 'getWithQuery', false )
  .then( res=>{
    const result = res.body
    result.data = result.data.map((item, index) => {
      item.key = index
      //item.status = '未发送'
      item.createdAt = moment(item.createdAt).format('YYYY-MM-DD HH:mm')
      item.publish_time = moment(item.publish_time).format('YYYY-MM-DD HH:mm')
      return item
    })
   dispatch('MESSAGE_GET_MESSAGE_UNPUBLISHED_SUCCESS', result)
   })
  .catch( res => {
      console.error(res)
      dispatch('MESSAGE_GET_MESSAGE_UNPUBLISHED_FAIL')
  })
}
