

const authority ={
  authorityArray:[{
    name: '李工', see: '有', monitor: '有', proName: '设备二', time: '2017-6-29 11:20', key: 0
  },{
    name: '李工', see: '有', monitor: '无', proName: '设备二', time: '2017-6-29 11:20', key: 1
  },{
    name: '李工', see: '有', monitor: '无', proName: '设备二', time: '2017-6-29 11:20', key: 2
  },{
    name: '李工', see: '有', monitor: '有', proName: '设备二', time: '2017-6-29 11:20', key: 3
  }],
  userNameArr: [],
  machineNameArr: [],
  newAuthorityArr: [{
    userId: '',
    deviceId: '',
    canView: false,
    canMonitor: false
  }]
}

const   newAuthoritys= {
    userId: '',
    deviceId: '',
    canView: false,
    canMonitor: false
  }

export default ( state=authority, action ) => {
  switch(action.type) {
    case 'AUTHORITY_GET_NUSER_NAME':
      return Object.assign({}, state, { userNameArr: action.payload } )
    case 'AUTHORITY_GET_MACHINE_NAME':
      return Object.assign({}, state, { machineNameArr: action.payload } )
    case 'AUTHORITY_ADD_NEW_AUTHORITY_INPUT':
    const a = state.newAuthorityArr
      a.push(newAuthoritys)
      return Object.assign({}, state, { newAuthorityArr: a } )
    default:
      return state
  }
}
