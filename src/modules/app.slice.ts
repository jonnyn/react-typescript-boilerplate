/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AppState = {
  saveCredentials: boolean
  error: any
}

const initialState: AppState = {
  saveCredentials: false,
  error: null,
}

// slice
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSaveCredentials(state, { payload }: PayloadAction<boolean>) {
      state.saveCredentials = payload
    },
  },
})

export const { actions } = appSlice
export const { setSaveCredentials } = appSlice.actions

export default appSlice.reducer
