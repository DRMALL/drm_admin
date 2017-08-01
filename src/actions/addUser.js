

import { newUser } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'
import store from '../commons/store'
import MissWarn from '../utils/MissWarn'


export default () => {
  const { name, password, email, phone, company_name, address } = store.getState().user
  const data = { name, password, email, phone, company_name, address }
  if(!(!name||!password||!email||!phone||!company_name||!address)){
  dispatch('USER_NEW_USER_START')
  Http(newUser, 'post', true, data)
  .then( res => dispatch('USER_NEW_INPUT_RESET') )
  .catch( res => console.error(res) )
  }
  else {
    dispatch('USER_SHORT_PARAMETER')
    MissWarn()
  }

}

