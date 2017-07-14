

const workOrder = {
  orderArr: [],
  workOrder: [],
  whichDisplay: '故障处理工单',
  title:'',
  content: '',
  advice: '',
}

export default ( state=workOrder, action )=> {
  switch(action.type){
    case 'WORKORDER_GET_ORDER_ARR':
      return Object.assign({}, state, { workOrder: action.payload } )
    case 'WORKORDER_DISPLAY_TROUBLE_ORDER':
      return Object.assign({}, state, { whichDisplay: action.payload } )
    case 'WORKORDER_DISPLAY_PART_ORDER':
      return Object.assign({}, state, { whichDisplay: action.payload } )
    case 'WORKORDER_GET_ORDER_BY_ID':
      return Object.assign({}, state, action.payload )
    case 'WORKORDER_GET_INPUT_VALUE':
      return Object.assign({}, state, action.payload )
    case 'WORKORDER_EDIT_RESET':
      return Object.assign({}, state, { advice: '' } )
    default:
      return state
  }
}
