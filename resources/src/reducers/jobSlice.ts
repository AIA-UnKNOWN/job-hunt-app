import { createSlice } from '@reduxjs/toolkit';

const jobSlice = createSlice({
  name: 'job',
  initialState: {
    data: {}
  },
  reducers: {
    setCurrentJob: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const { setCurrentJob } = jobSlice.actions;
export default jobSlice.reducer;