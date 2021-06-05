import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import appReducer from 'src/modules/app.slice'
import accountReducer from 'src/modules/account.slice'

const persistConfig = {
  key: 'app',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  app: appReducer,
  account: accountReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  middleware: [
    // logger,
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
  reducer: persistedReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)
export default store
