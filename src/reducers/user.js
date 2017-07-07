

const user ={
  userArr: [
  {name: 'admin', mail: 'admin@qq.com', phone: 16548545654, company: '新潮科技', address:'广东省潮州市潮安区', time: '2017-5-5', key:0},
  {name: 'admin', mail: 'admin@qq.com', phone: 16548545654, company: '新潮科技', address:'广东省潮州市潮安区', time: '2017-5-5', key:1},
  {name: 'admin', mail: 'admin@qq.com', phone: 16548545654, company: '新潮科技', address:'广东省潮州市潮安区', time: '2017-5-5', key:2 }],
  name: '',
  password: '',
  email: '',
  phone: '',
  company_name: '',
  address: ''
}

export default ( state=user, action ) => {
  switch(action.type) {
    case 'USER_ON_LOAD':
      return Object.assign({}, state, { user: '', password: '' } )
    default:
      return state
  }
}
