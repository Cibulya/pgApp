import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { Playground, Playgrounds } from '../../interfaces/playground';
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
    findPlaygrouns: (state, payLoad: PayloadAction<string>) => {
      const pgData: Playground[] = pgMock.playgrounds;
      const findedData = pgData.filter(
        e =>
          e.title.toLowerCase().includes(payLoad.payload.toLowerCase()) ||
          e.address.toLowerCase().includes(payLoad.payload.toLowerCase())
      );
      state.playgrounds.playgrounds = findedData;
    },
  },
});

export const { findPlaygrouns } = playgroundsSlice.actions;

export const playGroundsState = (state: RootState) => state.playgr.playgrounds;

export default playgroundsSlice.reducer;
