

const part = {
  partArr: [],
  machineId: undefined,
  remark: undefined,
}

export default (state=part, action) => {
  switch(action.type){
    case 'PART_GET_PART_ARR_SUCCESS':
      return Object.assign({}, state, { partArr: action.payload } )
    case 'PART_GET_MACHINE_ID':
      return Object.assign({}, state, { machineId: action.payload } )
    case 'PART_ADD_REMARK_SUCCESS':
      return Object.assign({}, state, { machineId: undefined, remark: undefined, status: 'part remark add success' } )
    case 'PART_GET_INPUT_VALUE':
      return Object.assign({}, state, action.payload )

//以下为测试所用actions
    case 'parts_test_addPartRemark':
      return Object.assign({}, state, action.payload )
    default:
      return state
  }
}
