

import getUserArr from './getUserArr'
import dispatch from './dispatch'

export default e => {
  dispatch('NAV_ON_SELECT', e.key)
  if(e.key==='用户管理') getUserArr()
  else console.log('xx')
}
