

import { browserHistory } from 'react-router'
import notification from 'antd/lib/notification'
import dispatch from './dispatch'

export default () => {
  dispatch('LOGIN_RESET')
  notification.error({
    message: '提示',
    description: '登录状态过期，请重新登录'
  })
  setTimeout( navLogin() , 2000   )
}

function navLogin() {
  browserHistory.replace('/login')
  localStorage.clear()
}
