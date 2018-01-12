

import { messageAll } from '../commons/apis'
import dispatch from './dispatch'
import Http from './Http'
import moment from 'moment'
import store from '../commons/store'


export default () => {
  const { messageSelect } = store.getState().message
  dispatch('MESSAGE_GET_MESSAGE_PUBLISHED_START')
  Http( `${messageAll}?published=true`, 'getWithQuery', false )
  .then( res=>{
    const result = res.body
    result.data = result.data.map((item, index) => {
      item.key = index
      //item.status = '已发送'
      item.createdAt = moment(item.createdAt).format('YYYY-MM-DD HH:mm')
      item.publish_time = moment(item.publish_time).format('YYYY-MM-DD HH:mm')
      return item
    })
   dispatch('MESSAGE_GET_MESSAGE_PUBLISHED_SUCCESS', result)
   })
  .catch( res => {
      console.error(res)
      dispatch('MESSAGE_GET_MESSAGE_PUBLISHED_FAIL')
  })
}
