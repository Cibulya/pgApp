import { configureStore } from '@reduxjs/toolkit';
import { playgroundsSlice } from '../slices/playground-slice';

export const store = configureStore({
  reducer: {
    pgReducer: playgroundsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
