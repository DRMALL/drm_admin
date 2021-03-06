

import { messageAll } from '../commons/apis'
import dispatch from './dispatch'
import Http from './Http'
import moment from 'moment'
import store from '../commons/store'


export default () => {
  const { messageSelect } = store.getState().message
  dispatch('MESSAGE_GET_MESSAGE_ARR_START')
  Http( `${messageAll}?published=true`, 'getWithQuery', false )
  .then( res=>{
    const result = res.body
    result.data = result.data.map((item, index) => {
      item.key = index
      item.status = item.published ? '已发送': '未发送'
      item.createdAt = moment(item.createdAt).format('YYYY-MM-DD HH:mm')
      item.publish_time = moment(item.publish_time).format('YYYY-MM-DD HH:mm')
      return item
    })
    console.log(111, result)
   dispatch('MESSAGE_GET_MESSAGE_ARR_SUCCESS', result)
     if(messageSelect==='notsend'){
      dispatch('MESSAGE_SELECT_SEND_FASLE')
     }
     else{
      dispatch('MESSAGE_SELECT_SEND_TRUE')
      }
   })
  .catch( res => {
      console.error(res)
      dispatch('MESSAGE_GET_MESSAGE_ARR_FAIL')
  })
}
