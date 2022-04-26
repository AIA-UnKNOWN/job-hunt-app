import { createSlice } from '@reduxjs/toolkit';

const PAGES = ['auth', 'home'];

const pageSlice = createSlice({
  name: 'page',
  initialState: {
    currentPage: PAGES[0],
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    }
  }
});

export { PAGES };
export const { setCurrentPage } = pageSlice.actions;
export default pageSlice.reducer;