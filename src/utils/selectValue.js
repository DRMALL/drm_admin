

//本函数目前仅用于machine功能页面中
import dispatch from '../actions/dispatch'

function selectValue(value){
  let arr = value.split('/')
  let obj ={}
  obj[arr[1]] = arr[0]
  dispatch('MACHINE_NEW_GET_SELECT', obj)
}

export default selectValue
