

const authority ={
  authorityArray:[],
  userNameArr: [],
  machineNameArr: [],
  newAuthorityArr: [{
    userId: '',
    deviceId: '',
    canView: false,
    canMonitor: false
  }],
  filterValue: ''
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
    case 'AUTHORITY_NEW_AUTHORITY_SUCCESS':
      return Object.assign({}, state, { newAuthorityArr: [{
          userId: '',
          deviceId: '',
          canView: false,
          canMonitor: false
        }]})
    case 'AUTHORITY_NEW_AUTHORITY_RESET':
      return Object.assign({}, state, { newAuthorityArr: action.payload } )
    case 'AUTHORITY_GET_AUTHORITY_SUCCESS':
      return Object.assign({}, state, { authorityArray: action.payload, TauthorityArray: action.payload } )
    case 'AUTHORITY_GET_AUTHORITY_EDIT':
      return Object.assign({}, state, { newAuthorityArr: action.payload } )
    case 'AUTHORITY_FILTER_VALUE_TABLE':
      return Object.assign({}, state, { authorityArray: action.payload } )
    default:
      return state
  }
}
