

const trouble = {
  title: '',
  category: '',
  content: '',
  troubleArr: []
}
const resetTrouble = {
  title: '',
  category: '',
  content: ''
}

export default ( state=trouble, action ) =>{
  switch(action.type){
    case 'TROUBLE_GET_INPUT_VALUE':
      return Object.assign({}, state, action.payload )
    case 'TROUBLE_GET_SELECT_VALUE':
      return Object.assign({}, state, { category: action.payload } )
    case 'TROUBLE_ADD_RESET':
      return Object.assign({}, state, resetTrouble )
    case 'TROUBLE_GET_TROUBLE_ARR':
      return Object.assign({}, state, { troubleArr: action.payload} )
    case 'TROUBLE_GET_TROUBLE_BY_ID':
      return Object.assign({}, state, action.payload )
    default :
      return state
  }
}
