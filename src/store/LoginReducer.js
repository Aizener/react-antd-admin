import { createStore } from 'redux'

const defaultState = {
  remember: false,
  userInfo: null
}
const LoginReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'login/changeUser':
      const user = action.user
      sessionStorage.setItem('token', user.token)
      if (user.remember) {
        localStorage.setItem('remember', user.remember)
        localStorage.setItem('token', user.token)
        localStorage.setItem('userInfo', JSON.stringify({ username: user.username, password: user.password }))
      }
      return {
        ...state,
        token: user.token,
        remember: user.remember,
        userInfo: { username: user.username, password: user.password }
      }
    default:
      return state
  }
}

export default createStore(LoginReducer)