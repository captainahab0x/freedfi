import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  linkedInUrl: '',
  linkedInUrlError: false,
  isAuthorized: null,
  needSponsorship: null,
  startPeriod: null,
  endPeriod: null,
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setLinkedInUrl(state, action) {
      state.linkedInUrl = action.payload;
    },

    setLinkedInUrlError(state, action) {
      state.linkedInUrlError = action.payload;
    },

    checkLinkedInUrl(state) {
      if (state.linkedInUrlError === true) {
        state.linkedInUrl = '';
      }
    },

    setAuthorized(state, action) {
      state.isAuthorized = action.payload;
    },

    setNeedSponsorship(state, action) {
      state.needSponsorship = action.payload;
    },

    setStartPeriod(state, action) {
      state.startPeriod = action.payload;
    },
    setEndPeriod(state, action) {
      state.endPeriod = action.payload;
    },
  },
});

export const onboardingActions = onboardingSlice.actions;

export default onboardingSlice;
