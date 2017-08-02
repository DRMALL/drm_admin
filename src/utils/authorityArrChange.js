
import store from '../commons/store'
import dispatch from '../actions/dispatch'

function authorityArrChange(e){
  const { newAuthorityArr } = store.getState().authority
  if(typeof e ==='string'){
    let arr = e.split('-')
    let num = parseInt(arr[0], 10)
    newAuthorityArr[num].deviceId = arr[1]
    dispatch('AUTHORITY_GET_MACHINE_VALUE', newAuthorityArr )
  }
  else return
}

export default authorityArrChange
