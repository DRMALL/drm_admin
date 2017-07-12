

import getUserArr from './getUserArr'
import getMessageArr from './getMessageArr'
import dispatch from './dispatch'

export default e => {
  dispatch('NAV_ON_SELECT', e.key)
  if(e.key==='用户管理') getUserArr()
  else if(e.key==='信息推送') getMessageArr()
  else console.log('xx')
}
