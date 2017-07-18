

const trouble = {
  title: '',
  categoryxx: '',
  content: '',
  troubleArr: []
}
const resetTrouble = {
  title: '',
  categoryxx: '',
  content: ''
}

export default ( state=trouble, action ) =>{
  switch(action.type){
    case 'TROUBLE_GET_INPUT_VALUE':
      return Object.assign({}, state, action.payload )
    case 'TROUBLE_GET_SELECT_VALUE':
      return Object.assign({}, state, { categoryxx: action.payload } )
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
