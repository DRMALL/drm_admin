

const authority ={
  user: '',
  password: ''
}

export default ( state=authority, action ) => {
  switch(action.type) {
    case 'AUTHORITY_ON_LOAD':
      return Object.assign({}, state, { user: '', password: '' } )
    default:
      return state
  }
}
