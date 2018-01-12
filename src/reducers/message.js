

const message = {
  unpublishedMeta: null,
  publishedMeta: null,
  publishedMessage: [],
  unpublishedMessage: [],
  previewVisible: false,
  previewImage: '',
  fileList: [],
  title: '',
  abstract: '',
  content: '',
  messageSelect: 'notsend',
  isEdit: false,
  messageRichImg: []
}

const resetMessage = {
  previewVisible: false,
  previewImage: '',
  fileList: [],
  title: '',
  abstract: '',
  content: '',
  messageSelect: 'notsend'
}
export default ( state=message, action ) => {
  switch(action.type){
    case 'MESSAGE_ON_LOAD':
      return Object.assign({}, state, { xx: 'xx' } )
    case 'MESSAGE_GET_INPUT_VALUE':
      return Object.assign({}, state, action.payload )
    case 'MESSAGE_UPLOAD_IMG':
      return Object.assign({}, state, { fileList: action.payload } )
    case 'MESSAGE_PREVIEW_IMG':
      return Object.assign({}, state, { previewImage: action.payload, previewVisible: true } )
    case 'MESSAGE_HIDDEN_MODAL':
      return Object.assign({}, state, { previewVisible: false  } )
    case 'MESSAGE_SAVE_START':
      return Object.assign({}, state, { status: 'save message start' } )
    case 'MESSAGE_SAVE_SUCCESS':
      return Object.assign({}, state, { status: 'save message success',
                previewVisible: false,
                previewImage: '',
                fileList: [],
                title: '',
                abstract: '',
                content: '',} )
    case 'MESSAGE_NEW_MESSAGE_START':
      return Object.assign({}, state, { status: 'new message start',   isEdit: true }, resetMessage )
    case 'MESSAGE_SAVE_FAIL':
      return Object.assign({}, state, { status: 'save message fail' } )
    case 'MESSAGE_GET_MESSAGE_UNPUBLISHED_START':
      return Object.assign({}, state, { status: 'get message arr start' } )
    case 'MESSAGE_GET_MESSAGE_UNPUBLISHED_SUCCESS':
      return Object.assign({}, state, { status: 'get message arr success', unpublishedMeta: action.payload.meta, unpublishedMessage: action.payload.data })
    case 'MESSAGE_GET_MESSAGE_UNPUBLISHED_FAIL':
      return Object.assign({}, state, { status: 'get message arr fail' } )
    case 'MESSAGE_GET_MESSAGE_PUBLISHED_START':
      return Object.assign({}, state, { status: 'get message arr start' } )
    case 'MESSAGE_GET_MESSAGE_PUBLISHED_SUCCESS':
      return Object.assign({}, state, { status: 'get message arr success', publishedMeta: action.payload.meta, publishedMessage: action.payload.data })
    case 'MESSAGE_GET_MESSAGE_PUBLISHED_FAIL':
      return Object.assign({}, state, { status: 'get message arr fail' } )
    case 'MESSAGE_SELECT_SEND_FASLE':
      return Object.assign({}, state, { messageSelect: 'notsend' } )
    case 'MESSAGE_SELECT_SEND_TRUE':
      return Object.assign({}, state, { messageSelect: 'send' } )
    case 'MESSAGE_GET_ONE_MESSAGE_START':
      return Object.assign({}, state, { status:'get message start' })
    case 'MESSAGE_GET_ONE_MESSAGE_SUCCESS':
      return Object.assign({}, state, { status: 'get message success' }, action.payload )
    case 'MESSAGE_GET_ONE_MESSAGE_FAIL':
      return Object.assign({}, state, { status: 'get message fail' } )
    case 'MESSAGE_EDIT_MESSAGE_START':
      return Object.assign({}, state, { status: 'edit message start' } )
    case 'MESSAGE_EDIT_MESSAGE_SUCCESS':
      return Object.assign({}, state, { status: 'edit message success' }, resetMessage )
    case 'MESSAGE_EDIT_MESSAGE_FAIL':
      return Object.assign({}, state, { status: 'edit message fail' } )
    case 'MESSAGE_GET_EDITOR_VALUE':
      return Object.assign({}, state, action.payload, { isEdit: false } )
    case 'MESSAGE_EDITOR_CAN_EDIT':
      return Object.assign({}, state, { isEdit: true } )
    case 'MESSAGE_CHANGE_EDITOR_STATUS':
      return Object.assign({}, state, { isEdit: true } )
    case 'MESSAGE_GET_RICH_TEXT_IMGAGES':
      return Object.assign({}, state, { messageRichImg: action.payload } )
    // case 'MESSAGE_NAV_TO_PUBLISH':
    //   return Object.assign({}, state, {  } )
    default :
      return state
  }
}
