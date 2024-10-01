import { createSlice } from '@reduxjs/toolkit';
// Пока не использую)
// import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { Playgrounds } from '../../interfaces/playground';
import { pgMock } from '../../text-mocks/playgrounds-mocks';

interface PgAppStore {
  isMobile: boolean;
  playgrounds: Playgrounds;
}

const initialState: PgAppStore = {
  isMobile: false,
  playgrounds: pgMock,
};

export const playgroundsSlice = createSlice({
  name: 'playGrounds',
  initialState,
  reducers: {
    test: state => {
      console.log(state);
    },
  },
});

export const { test } = playgroundsSlice.actions;

export const playGroundsState = (state: RootState) => state.playgr.playgrounds;

export default playgroundsSlice.reducer;
