

const login ={
  admin: '',
  password: '',
  loginStatus: false,
  verifyArr:[],
  verifyBgStar:[{ size: 1, y: 10, point: 6 }],
  verify: undefined
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
    case 'LOGIN_GET_VERIFY_BG':
      return Object.assign({}, state, { verifyBgStar: action.payload } )
    default:
      return state
  }
}
