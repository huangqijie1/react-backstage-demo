
// state
const userState = {
  user: {},
  token: '',
}

const reducer = (state = userState, action) => {
  switch (action.type) {
    case 'SAVE_USER':
      console.log('SAVE_USER_NAME---', action)
      return {
        ...state,
        user: action.data
      }      
    case 'SAVE_TOKEN':
      return {
        ...state,
        token: action.data.password
      }
    default:
      return state
  }
}
export default reducer