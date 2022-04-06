import { createStore } from 'redux'

const defaultState = {
  remember: false,
  userInfo: null
}
const UserReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'user/changeUser':
      const user = action.user
      localStorage.setItem('token', user.token)
      if (user.remember) {
        localStorage.setItem('remember', user.remember)
        localStorage.setItem('userInfo', JSON.stringify({ username: user.username, password: user.password }))
      } else {
        localStorage.removeItem('remember')
      }
      return {
        ...state,
        token: user.token,
        remember: user.remember,
        userInfo: { username: user.username, password: user.password }
      }
    case 'user/logout':
      const remember = localStorage.getItem('remember')
      const userInfo = localStorage.getItem('userInfo')
      localStorage.clear()
      if (remember) {
        localStorage.setItem('remember', remember)
        localStorage.setItem('userInfo', userInfo)
      }
      return state
    default:
      return state
  }
}

export default createStore(UserReducer)