
// state
const userState = {
  spin: false
}

const reducer = (state = userState, action) => {
  switch (action.type) {
    case 'SPINNING':
      console.log('SPINNING---', action)
      return {
        ...state,
        spin: action.spin
      }
    default:
      return state
  }
}
export default reducer