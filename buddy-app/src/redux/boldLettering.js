import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  boldLettering: false,
};

export const boldLetteringSlice = createSlice({
  name: 'boldLettering',
  initialState,
  reducers: {
    addBoldLettering: (state, action) => {
      state.boldLettering = action.payload
    },
  },
});

export const { addBoldLettering } = boldLetteringSlice.actions;

export default boldLetteringSlice.reducer;