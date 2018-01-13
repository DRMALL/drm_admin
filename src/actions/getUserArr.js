

import Http from './Http'
import HttpClass from './HttpClass'
import { userAction } from '../commons/apis'
import dispatch from './dispatch'
import moment from 'moment'

export default (offset = 0) => {
  let url = `${userAction}?offset=${offset}`
  Http( url, 'getWithQuery', false )
  .then(res => {
      const result = res.body
      result.data = result.data.map((item, index) => {
        item.key = index
        item.time = moment(item.createdAt).format('YYYY-MM-DD')
        return item
      })
      dispatch( 'USER_GET_ALL_USERS' ,result)
  })
  .catch(res => { console.error(res) } )
}

// export default ()=>{
//   const requestxx = new HttpClass(userAction)
//   requestxx
//   .hideTip()
//   .get()
//   .then(res => {
//       const result = res.body.data
//       result.map((item, index) => {
//         item.key = index
//         item.time = moment(item.createdAt).format('YYYY-MM-DD')
//         return item
//       })
//       dispatch( 'USER_GET_ALL_USERS' ,result)
//   })
//   .catch(res => { console.error(res) } )
// }
