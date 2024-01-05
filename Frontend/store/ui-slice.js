import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isInvester: false,
  isSeeker: false,
  isConfetti: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleIsInvester(state, actions) {
      state.isInvester = actions.payload
    },
    toggleIsSeeker(state, actions) {
      state.isSeeker = actions.payload
    },
    toggleConfetti(state, actions) {
      state.isConfetti = actions.payload
    },
  },
})

export const uiActions = uiSlice.actions

export default uiSlice
