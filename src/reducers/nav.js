

const nav ={
  sliderSelect: '用户管理',
}

export default ( state=nav, action ) => {
  switch(action.type) {
    case 'NAV_ON_SELECT':
      return Object.assign({}, state, { sliderSelect: action.payload } )
    default:
      return state
  }
}
