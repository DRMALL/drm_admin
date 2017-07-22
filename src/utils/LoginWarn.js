

import notification from 'antd/lib/notification'

function LoginWarn(admin, password){
  notification.warning({
    message: '提示',
    description: `请输入${ !admin ? '用户名' : '密码' }`
  })
}

export default LoginWarn
