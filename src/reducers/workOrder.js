

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
      return Object.assign({}, state, { TworkOrder: action.payload } )
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
    default:
      return state
  }
}
