

const machine ={
  fileList: [],
  previewImage: '',
  previewVisible: false,
  name: '',
  number: '',
  cc: '',
  pressure: '',
  combustible: '',
  description: '',
  address: '',
  line_time: undefined,
  line_des: undefined,
  timetype: undefined,
  timelines: [],
  affixChange: false,
}

const resetMachine = {
  name: '',
  number: '',
  fileList: [],
  cc: '',
  pressure: '',
  combustible: '',
  description: '',
  address: '',
  line_time: null,
  line_des: '',
  timetype: null,
  timelines: [],
  affixChange: false,
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
    case 'MACHINE_ADD_MACHINE_SUCCESS':
      return Object.assign({}, state, resetMachine )
    case 'MACHINE_NEW_MACHINE_RESET':
      return Object.assign({}, state, resetMachine )
    case 'MACHINE_GET_MACHINE_ARR_SUCCESS':
      return Object.assign({}, state, { machineArr: action.payload } )
    case 'MACHINE_GET_MACHINE_BY_ID':
      return Object.assign({}, state, action.payload )
    case 'MACHINE_SELCET_TIME':
      return Object.assign({}, state, { line_time: action.payload } )
    case 'MACHINE_EDIT_MACHINE_SUCCESS':
      return Object.assign({}, state, resetMachine )
    case 'MACHINE_AFFIX_PADDING_CHANGE':
      return Object.assign({}, state, { affixChange: action.payload } )
    default:
      return state
  }
}
