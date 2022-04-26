import { createSlice } from '@reduxjs/toolkit';

const myJobPostings = createSlice({
  name: 'myJobPostings',
  initialState: {
    list: []
  },
  reducers: {
    setMyJobPostingList: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { setMyJobPostingList } = myJobPostings.actions;
export default myJobPostings.reducer;