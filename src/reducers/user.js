

const user ={
  userArr: [],
  name: '',
  password: '',
  email: '',
  phone: '',
  company_name: '',
  address: '',
  userInfo:''
}

export default ( state=user, action ) => {
  switch(action.type) {
    case 'USER_ON_LOAD':
      return Object.assign({}, state, { user: '', password: '' } )
    case 'USER_GET_INPUT_VALUE':
      return Object.assign({}, state, action.payload )
    case 'USER_NEW_INPUT_RESET':
      return Object.assign({}, state, {   name: '', password: '', email: '', phone: '', company_name: '', address: '' } )
    case 'USER_GET_ALL_USERS':
      return Object.assign({}, state, { userArr: action.payload } )
    case 'USER_GET_USER_INFO_BY_ID':
      return Object.assign({}, state,  action.payload  )
    case 'USER_SHORT_PARAMETER':
      return Object.assign({}, state, { status: 'short parameter' } )
    case 'USER_NEW_USER_START':
      return Object.assign({}, state, { status: 'new user start' } )
    default:
      return state
  }
}
