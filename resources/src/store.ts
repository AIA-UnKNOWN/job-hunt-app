import { configureStore } from '@reduxjs/toolkit';
import authSlice from '@reducers/authSlice';
import userSlice from '@reducers/userSlice';
import myJobPostingsSlice from '@reducers/myJobPostingsSlice';

export default configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    myJobPostings: myJobPostingsSlice,
  }
});