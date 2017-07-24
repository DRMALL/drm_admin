

import getUserArr from './getUserArr'
import getMessageArr from './getMessageArr'
import getMachineArr from './getMachineArr'
import dispatch from './dispatch'

export default e => {
  dispatch('NAV_ON_SELECT', e.key)
  if(e.key==='用户管理') getUserArr()
  else if(e.key==='信息推送') getMessageArr()
  else if(e.key==='设备管理') getMachineArr()
  else console.log('xx')
}
