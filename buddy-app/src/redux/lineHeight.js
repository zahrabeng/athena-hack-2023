import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lineHeight: 40,
}

export const lineHeightSlice = createSlice({
  name: 'lineHeight',
  initialState,
  reducers: {
    updateLineHeight: (state, action) => {
      state.lineHeight = action.payload
    },
  },
});

export const { updateLineHeight } = lineHeightSlice.actions;

export default lineHeightSlice.reducer;