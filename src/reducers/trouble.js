

const trouble = {
  title: '',
  categoryxx: '',
  content: '',
  troubleArr: [],
  troubleKinds: [],
  kind: '',
  troubleKindId: '',
  troubleModal: false,
  troubleId: '',
  isEdit: true
}
const resetTrouble = {
  title: '',
  categoryxx: '',
  content: '',
  kind: '',
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
    case 'TROUBLE_GET_TROUBLE_KIND_ARR':
      return Object.assign({}, state, { troubleKinds: action.payload })
    case 'TROUBLE_ADD_TROUBLE_KIND_SUCCESS':
      return Object.assign({}, state, { kind: '' } )
    case 'TROUBLE_GET_TROUBLE_KIND_ID':
      return Object.assign({}, state, { troubleKindId: action.payload })
    case 'TOUBLE_DEL_TROUBLE_KIND_SUCCESS':
      return Object.assign({}, state, { troubleKindId: '' })
    case 'TROUBEL_CANCLE_DEL_TROUBEL':
      return Object.assign({}, state, { troubleModal: false } )
    case 'TROUBLE_DEL_TROUBLE_SUCCESS':
      return Object.assign({}, state, { troubleModal: false } )
    case 'TROUBLE_GET_TROUBLE_ID':
      return Object.assign({}, state, { troubleModal: true, troubleId: action.payload } )
    case 'TROUBLE_GET_CONTENT_VALUE':
      return Object.assign({},  state, action.payload, { isEdit: false })
    case 'TROUBLE_EDITOR_CAN':
      return Object.assign({}, state, { isEdit: true } )
    case 'TROUBLE_NEW_RESET':
      return Object.assign({}, state, resetTrouble )
    case 'TROUBLE_ADD_START':
      return Object.assign({}, state, { isEdit: true } )
    default :
      return state
  }
}
