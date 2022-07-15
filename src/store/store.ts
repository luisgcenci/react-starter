import { configureStore } from '@reduxjs/toolkit';
import sampleSlice from 'store/features/sampleSlice';

export const store = configureStore({
  reducer: {
    sample: sampleSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;