import { createSlice } from '@reduxjs/toolkit';

const SCREENS = [
  'job postings',
  'view job',
];

const recruiterScreenSlice = createSlice({
  name: 'recruiterScreen',
  initialState: {
    currentScreen: SCREENS[0]
  },
  reducers: {
    setCurrentScreen: (state, action) => {
      state.currentScreen = action.payload;
    }
  }
});

export { SCREENS };
export const { setCurrentScreen } = recruiterScreenSlice.actions;
export default recruiterScreenSlice.reducer;