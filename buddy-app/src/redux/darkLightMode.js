import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkLightMode: {text: 'black', background: 'white'},
};

export const darkLightModeSlice = createSlice({
  name: 'darkLightMode',
  initialState,
  reducers: {
    switchDarkLightMode: (state, action) => {
      state.darkLightMode = action.payload
    },
  },
});

export const { switchDarkLightMode } = darkLightModeSlice.actions;

export default darkLightModeSlice.reducer;