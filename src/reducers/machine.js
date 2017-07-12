

const machine ={
  fileList: '',
  previewImage: '',
  previewVisible: false,
}

export default ( state=machine, action ) => {
  switch(action.type){
    case 'xxxx':
      return Object.assign({}, state, { xx: 'xx' } )
    default:
      return state
  }
}
