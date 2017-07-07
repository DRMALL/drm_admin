

import request from 'superagent'
import { userAction } from '../commons/apis'
import dispatch from './dispatch'
import notification from 'antd/lib/notification'
import resetLogin from './resetLogin'
import moment from 'moment'

export default () => {
  const token = localStorage.getItem('token')
  request
  .get(`${userAction}?token=${token}`)
  .then(res => {
    if(res.body.code===200) {
      const result = res.body.data
      result.map((item, index) => {
        item.key = index
        item.time = moment(item.createdAt).format('YYYY-MM-DD')
        return item
      })
      dispatch( 'USER_GET_ALL_USERS' ,result)
    }
    else if(res.body.code===402) resetLogin()
      else getFail()
  })
  .catch(res => { console.error(res) } )
}

function getFail(){
  notification({
    message: '提示',
    description: '获取数据错误'
  })
}
