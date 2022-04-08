import { createStore, combineReducers  } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
 
import { ThemeReducer } from './ThemeReducer'

const reducers = combineReducers({
  ThemeReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: [],
  // blacklist: []
}
 
const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer)
export const persistor = persistStore(store)
export default store
