

const login ={
  admin: '',
  password: ''
}

export default ( state=login, action ) => {
  switch(action.type) {
    case 'LOGIN_ON_LOAD':
      return Object.assign({}, state, { admin: '', password: '' } )
    case 'LOGIN_GET_INPUT_VALUE':
      return Object.assign({}, state, action.payload )
    default:
      return state
  }
}
