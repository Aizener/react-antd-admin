import { createStore } from 'redux'


const themes = [
  { title: '默认主题', value: 'default' },
  { title: '夜色主题', value: 'dark' },
  { title: '经典主题', value: 'classic'}
]
const defaultState = { current: 'default', themes }
export const ThemeReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'theme/change':
      return { ...state, current: action.payload }
    default:
      return state
  }
}

export default createStore(ThemeReducer)