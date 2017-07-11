import whichSelect from '../utils/whichSelect'

const nav ={
  sliderSelect: whichSelect(window.location.pathname),
}

export default ( state=nav, action ) => {
  switch(action.type) {
    case 'NAV_ON_SELECT':
      return Object.assign({}, state, { sliderSelect: action.payload } )
    default:
      return state
  }
}
