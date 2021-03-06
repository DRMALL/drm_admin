

const workOrder = {
  orderArr: [],
  workOrder: [],
  whichDisplay: '故障处理工单',
  title:'',
  content: '',
  advice: '',
  isShowModal: false,
  isShowPre: false,
  preImg: undefined,
}

export default ( state=workOrder, action )=> {
  switch(action.type){
    case 'WORKORDER_GET_ORDER_ARR':
      return Object.assign({}, state, { TworkOrder: action.payload, isShowModal: false } )
    case 'WORKORDER_SELECT_WITCH_ORDER_DISPLAY':
      return Object.assign({}, state, { workOrder: action.payload } )
    case 'WORKORDER_DISPLAY_TROUBLE_ORDER':
       let arr = state.TworkOrder.filter(item => item.category ==='故障处理工单')
      return Object.assign({}, state, { whichDisplay: action.payload, workOrder: arr } )
    case 'WORKORDER_DISPLAY_PART_ORDER':
      let array = state.TworkOrder.filter(item => item.category !=='故障处理工单')
      return Object.assign({}, state, { whichDisplay: action.payload, workOrder:array } )
    case 'WORKORDER_GET_ORDER_BY_ID':
      return Object.assign({}, state, action.payload )
    case 'WORKORDER_GET_INPUT_VALUE':
      return Object.assign({}, state, action.payload )
    case 'WORKORDER_EDIT_RESET':
      return Object.assign({}, state, { advice: '' } )
    case 'WORKORDER_GET_DEL_ORDER_ID':
      return Object.assign({}, state, { workOrderId: action.payload, isShowModal: true } )
    case 'WORKORDER_CANCLE_ORDER':
      return Object.assign({}, state, { isShowModal: false } )
    case 'WORKORDER_DEL_WORKORDER_FAIL':
      return Object.assign({}, state, { isShowModal: false } )
    case 'WORKORDER_DEL_WORKORDER_SUCCESS':
      return Object.assign({}, state, { isShowModal: false } )
    case 'WORKORDER_PREVIEW_IMG':
      return Object.assign({}, state, { isShowPre: true, preImg: action.payload } )
    case 'WORKORDER_HIDDEN_IMG':
      return Object.assign({}, state, { isShowPre: false, preImg: undefined } )
    default:
      return state
  }
}
