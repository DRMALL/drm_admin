

const message = {
  messageArr: [
  {title: '多元热流体稠油增产技术在金海采油厂...', tip: '我是摘要', authour: '作者', status: '已发送', time: '2017-6-29 10:41', pushTime:'2017-6-29 10:41', key: 0},
  {title: '多元热流体稠油增产技术在金海采油厂...', tip: '我是摘要', authour: '作者', status: '已发送', time: '2017-6-29 10:41', pushTime:'2017-6-29 10:41', key: 1},
  {title: '多元热流体稠油增产技术在金海采油厂...', tip: '我是摘要', authour: '作者', status: '已发送', time: '2017-6-29 10:41', pushTime:'2017-6-29 10:41', key: 2},],
  previewVisible: false,
  previewImage: '',
  fileList: [],
  title: '',
  abstract: '',
  content: '',
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
    case 'MESSAGE_SAVE_FAIL':
      return Object.assign({}, state, { status: 'save message fail' } )
    default :
      return state
  }
}
