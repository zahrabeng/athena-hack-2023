import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fontSize: 40,
}

export const fontSizeSlice = createSlice({
  name: 'fontSize',
  initialState,
  reducers: {
    updateFontSize: (state, action) => {
      state.fontSize = action.payload
    },
  },
});

export const { updateFontSize } = fontSizeSlice.actions;

export default fontSizeSlice.reducer;