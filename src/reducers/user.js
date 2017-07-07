

const user ={
  userArr: [],
  name: 'adssd',
  password: '123423',
  email: '432542345@qq.com',
  phone: '13845873659',
  company_name: '新潮科技',
  address: '广东省潮州市潮安区',
  userInfo:''
}

export default ( state=user, action ) => {
  switch(action.type) {
    case 'USER_ON_LOAD':
      return Object.assign({}, state, { user: '', password: '' } )
    case 'USER_GET_INPUT_VALUE':
      return Object.assign({}, state, action.payload )
    case 'USER_NEW_INPUT_RESET':
      return Object.assign({}, state, {   name: 'adssd', password: '123423', email: '432542345@qq.com', phone: '13845873659', company_name: '新潮科技', address: '广东省潮州市潮安区' } )
    case 'USER_GET_ALL_USERS':
      return Object.assign({}, state, { userArr: action.payload } )
    case 'USER_GET_USER_INFO_BY_ID':
      return Object.assign({}, state,  action.payload  )
    default:
      return state
  }
}
