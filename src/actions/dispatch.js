

import store from '../commons/store'

function dispatch( type, payload ) {
  console.log(type, payload)
  if( typeof(payload)==='undefined' ) {
    return store.dispatch({ type })
  }
  else store.dispatch({ type, payload })
}

export default dispatch
