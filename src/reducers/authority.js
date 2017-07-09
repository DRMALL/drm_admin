

const authority ={
  authorityArray:[{
    name: '李工', see: '有', monitor: '有', proName: '设备二', time: '2017-6-29 11:20', key: 0
  },{
    name: '李工', see: '有', monitor: '无', proName: '设备二', time: '2017-6-29 11:20', key: 1
  },{
    name: '李工', see: '有', monitor: '无', proName: '设备二', time: '2017-6-29 11:20', key: 2
  },{
    name: '李工', see: '有', monitor: '有', proName: '设备二', time: '2017-6-29 11:20', key: 3
  }]
}

export default ( state=authority, action ) => {
  switch(action.type) {
    case 'AUTHORITY_ON_LOAD':
      return Object.assign({}, state, { user: '', password: '' } )
    default:
      return state
  }
}
