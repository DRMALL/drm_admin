

const login ={
  admin: '',
  password: '',
  loginStatus: false,
  verifyArr:[6,5,7,5,8,4]
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
    case 'LOGIN_GET_VERIFY_NUM':
      return Object.assign({}, state, { verifyArr: action.payload } )
    default:
      return state
  }
}
