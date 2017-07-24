

const machine ={
  fileList: [],
  previewImage: '',
  previewVisible: false,
}

export default ( state=machine, action ) => {
  switch(action.type){
    case 'MACHINE_GET_INPUT_VALUE':
      return Object.assign({}, state, action.payload )
    case 'MACHINE_UPLOAD_IMG':
      return Object.assign({}, state, { fileList: action.payload } )
    case 'MACHINE_PREVIEW_IMG':
      return Object.assign({}, state, { previewImage: action.payload, previewVisible: true } )
    case 'MACHINE_HIDDEN_MODAL':
      return Object.assign({}, state, { previewVisible: false, previewImage: '' } )
    case 'MACHINE_NEW_GET_SELECT':
      return Object.assign({}, state, action.payload )
    default:
      return state
  }
}
