import { createStore } from 'redux'

const defaultState = { collapsed: false }
const MenuReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'menu/change':
      return { ...state, collapsed: !state.collapsed }
    default:
      return state
  }
}

export default createStore(MenuReducer)