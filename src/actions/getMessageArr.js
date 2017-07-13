

import { messageAll } from '../commons/apis'
import dispatch from './dispatch'
import Http from './Http'
import moment from 'moment'
import store from '../commons/store'


export default () => {
  const { messageSelect } = store.getState().message
  dispatch('MESSAGE_GET_MESSAGE_ARR_START')
  Http( messageAll, 'get', false )
  .then( res=>{
    const result = res.body.data
    let a = result.map((item, index) => {
      item.key = index
      item.status = item.published ? '已发送': '未发送'
      item.createdAt = moment(item.createdAt).format('YYYY-MM-DD HH:mm')
      item.updatedAt = moment(item.updatedAt).format('YYYY-MM-DD HH:mm')
      return item
    })
   dispatch('MESSAGE_GET_MESSAGE_ARR_SUCCESS', a)
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
