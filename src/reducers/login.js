

const login ={
  admin: '',
  password: '',
  loginStatus: false
}

export default ( state=login, action ) => {
  switch(action.type) {
    case 'LOGIN_ON_LOAD':
      return Object.assign({}, state, { admin: '', password: '' } )
    case 'LOGIN_GET_INPUT_VALUE':
      return Object.assign({}, state, action.payload )
    case 'LOGIN_RESET':
      return Object.assign({}, state, { loginStatus: false } )
    case "LOGIN_SUCCESS_LOGIN":
      return Object.assign({}, state, { loginStatus: true } )
    default:
      return state
  }
}
