

const authority ={
  authorityArray:[],
  meta: null,
  userNameArr: [],
  machineNameArr: [],
  newAuthorityArr: [{
    userId: '',
    deviceId: '',
    canView: false,
    canMonitor: false
  }],
  filterValue: '',
  authModal: false,
  authId: ''
}


export default ( state=authority, action ) => {
  switch(action.type) {
    case 'AUTHORITY_GET_NUSER_NAME':
      return Object.assign({}, state, { userNameArr: action.payload } )
    case 'AUTHORITY_GET_MACHINE_NAME':
      return Object.assign({}, state, { machineNameArr: action.payload } )
    case 'AUTHORITY_ADD_NEW_AUTHORITY_INPUT':
    const a = state.newAuthorityArr
     let b = a.concat([{
    userId: '',
    deviceId: '',
    canView: false,
    canMonitor: false
  }])
      return Object.assign({}, state, { newAuthorityArr: b } )
    case 'AUTHORITY_NEW_AUTHORITY_SUCCESS':
      return Object.assign({}, state, { newAuthorityArr: [{
          userId: '',
          deviceId: '',
          canView: false,
          canMonitor: false
        }], status: 'new auth success'})
    case 'AUTHORITY_NEW_RESET':
      return Object.assign({}, state, { newAuthorityArr: [{
          userId: '',
          deviceId: '',
          canView: false,
          canMonitor: false
        }]})
    case 'AUTHORITY_NEW_AUTHORITY_RESET':
      return Object.assign({}, state, { newAuthorityArr: action.payload, status: 'newAuthorityArr reset'} )
    case 'AUTHORITY_GET_AUTHORITY_SUCCESS':
      return Object.assign({}, state, { authorityArray: action.payload.data, TauthorityArray: action.payload.data, meta: action.payload.meta  } )
    case 'AUTHORITY_GET_AUTHORITY_EDIT':
      return Object.assign({}, state, { newAuthorityArr: action.payload } )
    case 'AUTHORITY_FILTER_VALUE_TABLE':
      return Object.assign({}, state, { authorityArray: action.payload } )
    case 'AUTHORITY_DEL_GET_AUTHID':
      return Object.assign({}, state, { authId: action.payload, authModal: true } )
    case 'AUTHORITY_CANCLE_DEL_AUTH':
      return Object.assign({}, state, { authModal: false } )
    case 'AUTHROITY_DEL_AUTH_SUCCESS':
      return Object.assign({}, state, { authModal: false, status: 'del auth success' } )
    case 'AUTHROITY_DEL_AUTH_fail':
      return Object.assign({}, state, { authModal: false, status: 'del auth fail' } )
    case 'AUTHORITY_EDIT_POST_SUCCESS':
      return Object.assign({}, state, { newAuthorityArr: [{
    userId: '',
    deviceId: '',
    canView: false,
    canMonitor: false
  }], status: 'edit post success' } )

//测试构造数据
    case 'AUTHORITY_TEST_AUTHORITY_ARR_CHANGE':
      return Object.assign({}, state, { newAuthorityArr: action.payload } )
    case 'auth_post_test_authEditPost':
      return Object.assign({}, state, action.payload )
    default:
      return state
  }
}
