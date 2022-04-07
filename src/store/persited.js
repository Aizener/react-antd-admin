import { createStore, combineReducers  } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
 
import { MenuReducer } from './MenuReducer'
import { UserReducer } from './UserReducer'

const reducers = combineReducers({
  MenuReducer,
  UserReducer
})

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ["UserReducer"],
  // blacklist: []
}
 
const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer)
export const persistor = persistStore(store)
export default store
