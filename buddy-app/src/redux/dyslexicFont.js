import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dyslexicFont: 'unset',
};

export const dyslexicFontSlice = createSlice({
  name: 'dyslexicFont',
  initialState,
  reducers: {
    addDyslexicFont: (state, action) => {
      state.dyslexicFont = action.payload
    },
  },
});

export const { addDyslexicFont } = dyslexicFontSlice.actions;

export default dyslexicFontSlice.reducer;