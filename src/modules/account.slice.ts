/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { client as apollo } from 'src/utils/apollo'
import { loggedIn, authLogout } from 'src/utils/auth'
import { GET_ME } from './account.schema'

// ---------------------------------------
// Helpers
// ---------------------------------------

const logoutHelper = (currentState: any) => {
  authLogout()
  apollo.resetStore()
  currentState.loggedIn = false
  currentState.user = {}
}

// ---------------------------------------
// Thunks
// ---------------------------------------

export const authenticate = createAsyncThunk(
  'account/authenticate',
  async () => {
    const isLoggedIn = await loggedIn()
    if (isLoggedIn) {
      try {
        const {
          data: { me },
        } = await apollo.query({
          query: GET_ME,
        })
        if (!me) {
          return null
        }
        return me.user || {}
      } catch {
        return null
      }
    }
    return false
  },
)

type UserState = {
  checking: boolean
  checked: boolean
  loggedIn: boolean
  user: any
  error: any
}

const initialState: UserState = {
  checking: false,
  checked: false,
  loggedIn: false,
  user: {},
  error: null,
}

// slice
const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    login(state, { payload }) {
      // ok to "mutate" the state by overwriting a field
      state.loggedIn = true
      state.user = payload
    },
    logout(state) {
      logoutHelper(state)
    },
    saveMe(state, { payload }) {
      state.user = payload.user
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authenticate.pending, (state) => {
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
      state.checking = true
      state.checked = false
    })
    builder.addCase(authenticate.fulfilled, (state, { payload }) => {
      if (payload) {
        state.loggedIn = true
        state.user = payload
      } else {
        logoutHelper(state)
      }
      state.checking = false
      state.checked = true
    })
    builder.addCase(authenticate.rejected, (state, action) => {
      state.error = action?.error
      logoutHelper(state)
    })
  },
})

export const { actions } = accountSlice
export const { login, logout, saveMe } = accountSlice.actions

export default accountSlice.reducer
