import { createStore } from 'redux'

const defaultState = {
  remember: localStorage.getItem('remember') || false,
  userInfo: sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : null
}

export const UserReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'user/changeUser':
      const user = action.user
      sessionStorage.setItem('token', user.token)
      if (user.remember) {
        localStorage.setItem('remember', user.remember)
        sessionStorage.setItem('userInfo', JSON.stringify({ username: user.username, password: user.password }))
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
      const userInfo = sessionStorage.getItem('userInfo')
      localStorage.clear()
      sessionStorage.clear()
      if (remember) {
        localStorage.setItem('remember', remember)
        sessionStorage.setItem('userInfo', userInfo)
      }
      return state
    default:
      return state
  }
}

export default createStore(UserReducer)