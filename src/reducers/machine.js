

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
  downloadTime: [],
  imgNum: 0,
  timelineKind: undefined,
  TimelineKindArr: [],
  CCKindArr: [],
  presureKindArr: [],
  fuleKindArr:[]
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
  line_type: null,
  timetype: null,
  timelines: [],
  affixChange: false,
  classify:null,
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
      return Object.assign({}, state, resetMachine, { status: 'edit machine success' } )
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
    case 'MACHINE_DEL_MACHINE_FAIL':
      return Object.assign({}, state, { machineModal: false } )
    case 'MACHINE_PUT_TIMELINE_SUCCESS':
      return Object.assign({}, state, { line_time: undefined, line_des: undefined, line_type: undefined } )
    case 'MACHINE_GET_DWONLOAD_EXCEL_TIME':
      return Object.assign({}, state, { downloadTime: action.payload } )
    case 'UPLOAD_IMG_GET_NUM':
      return Object.assign({}, state, { imgNum: action.payload } )
    case 'RESET_UPLOAD_IMG':
      return Object.assign({}, state, { imgNum: 0 } )
    case 'MACHINE_TIME_GET_MACHINE_TIME_SUCCESS':
      return Object.assign({}, state, { TimelineKindArr: action.payload } )
    case 'MACHINE_KIND_NEW_INPUT_RESET':
      return Object.assign({}, state, { timelineKind: undefined, CCKind:undefined, presureKind: undefined, fuleKind: undefined } )
    case 'MACHINE_KIND_ARR_GET_KIND_ID':
      return Object.assign({}, state, { KindId: action.payload, editValue:undefined } )
    case 'MACHINE_GET_EDIT_VALUE':
      return Object.assign({}, state, { editValue: action.payload } )
    case 'MACHINE_GET_INPUT_EDIT_VALUE':
      return Object.assign({}, state, { editValue: action.payload } )
    case 'MACHINE_CC_GET_MACHINE_CC_SUCCESS':
      return Object.assign({}, state, { CCKindArr: action.payload } )
    case 'MACHINE_PRESURE_GET_MACHINE_PRESURE_SUCCESS':
      return Object.assign({}, state, { presureKindArr: action.payload } )
    case 'MACHINE_FULE_GET_MACHINE_FULE_SUCCESS':
      return Object.assign({}, state, { fuleKindArr: action.payload } )
    case 'MACHINE_GET_MACHINE_STATUS_INFO_BY_ID':
      return Object.assign({}, state, { machineStatusInfo: action.payload} )
    case 'MACHINE_STATUS_INFO_RESET':
      return Object.assign({}, state, { machineStatusInfo: undefined } )
    case 'MACHINE_SELECT_MACHINE_NAME_AND_ADDRESS':
      return Object.assign({}, state, action.payload )

//测试模拟数据
    case 'machine_test_default_value':
      return Object.assign({}, state, action.payload )
    default:
      return state
  }
}
