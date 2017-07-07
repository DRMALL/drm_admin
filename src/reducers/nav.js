

const nav ={
  sliderSelect: '信息推送',
}

export default ( state=nav, action ) => {
  switch(action.type) {
    case 'NAV_ON_SELECT':
      return Object.assign({}, state, { sliderSelect: action.payload } )
    default:
      return state
  }
}
