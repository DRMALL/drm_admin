

import dispatch from './dispatch'

export default e => {
  const { path, id } = e.currentTarget.dataset
  const { value } = e.target
  const obj = {}
  obj[id] = ( id==='abstract' ) ? limitStr(value) : value
  dispatch(`${path}_GET_INPUT_VALUE`, obj )
}


function limitStr(str){
  let strs = (str.length >60) ? str.slice(0,60) : str
  return strs
}
