

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
  line_type: undefined,
  timelines: [],
  affixChange: false,
  timeLineId: undefined,
  machineArr: [],
  machineModal: false,
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
    case 'MACHINE_GET_TIME_LINE_ID':
     const arrxx = state.timelines.filter(item => item._id ===action.payload)
      return Object.assign({}, state, { timeLineId: action.payload, editTimeline: arrxx[0] } )
    case 'MACHINE_GET_DEL_MACHINE_ID':
      return Object.assign({}, state, { delMachineId: action.payload, machineModal: true } )
    case 'MACHINE_CANCLE_DEL_MACHINE':
      return Object.assign({}, state,  { delMachineId: undefined, machineModal: false } )
    case 'MACHINE_DEL_MACHINE_SUCCESS':
      return Object.assign({}, state,  { delMachineId: undefined, machineModal: false } )
    case 'MACHINE_PUT_TIMELINE_SUCCESS':
      return Object.assign({}, state, { line_time: undefined, line_des: undefined, line_type: undefined } )
    case 'MACHINE_GET_DWONLOAD_EXCEL_TIME':
      return Object.assign({}, state, { downloadTime: action.payload } )
    default:
      return state
  }
}
