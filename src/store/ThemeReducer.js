import { createStore } from 'redux'

const deafultStyle = {
  '--bg-color': '#fff',
  '--text-color': '#333',
  '--active-color': '#1890ff',
  antdTheme: 'light'
}

const darkStyle = {
  '--bg-color': '#001529',
  '--text-color': '#fff',
  '--active-color': '#1890ff',
  antdTheme: 'dark'
}



export const themes = [
  { title: '默认主题', value: 'default', style: deafultStyle },
  { title: '夜色主题', value: 'dark', style: darkStyle },
  // { title: '经典主题', value: 'classic'}
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