

import dispatch from './dispatch'

export default e=> {
  const { path, id } = e.currentTarget.dataset
  const { value } = e.target
  const obj = {}
  obj[id] = value
  dispatch(`${path}_GET_INPUT_VALUE`, obj )
}
