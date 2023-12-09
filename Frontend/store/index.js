import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './posts-slice';
import uiSlice from './ui-slice';
import onboardingSlice from './onboarding-slice';

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    ui: uiSlice.reducer,
    onboarding: onboardingSlice.reducer,
  },
});

export default store;
