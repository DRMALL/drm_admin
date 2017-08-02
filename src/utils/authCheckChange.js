

import dispatch from '../actions/dispatch'
import store from '../commons/store'

function authCheckChange(e){
  const { id , num } = e.target
  const { newAuthorityArr } = store.getState().authority
  newAuthorityArr[num][id] = !newAuthorityArr[num][id]
  dispatch('AUTHORITY_GET_MACHINE_VALUE', newAuthorityArr )
}

export default authCheckChange
