

const part = {
  partArr: [],
}

export default (state=part, action) => {
  switch(action.type){
    case 'PART_GET_PART_ARR_SUCCESS':
      return Object.assign({}, state, { partArr: action.payload } )
    default:
      return state
  }
}
