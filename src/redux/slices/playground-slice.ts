import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { Playground } from '../../interfaces/playground';
import { pgMock } from '../../text-mocks/playgrounds-mocks';
import { filteredPgArray } from '../../utils/searchElements';

interface PgAppStore {
  playgrounds: Playground[];
}

const initialState: PgAppStore = {
  playgrounds: pgMock,
};

export const playgroundsSlice = createSlice({
  name: 'playGrounds',
  initialState,
  reducers: {
    findPlaygrouns: (state, action: PayloadAction<string>) => {
      const pgData: Playground[] = pgMock;
      const findedData = filteredPgArray(action.payload, pgData);
      state.playgrounds = findedData;
    },
  },
});

export const { findPlaygrouns } = playgroundsSlice.actions;

export const playGroundsState = (state: RootState) =>
  state.pgReducer.playgrounds;

export default playgroundsSlice.reducer;
