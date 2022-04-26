import { configureStore } from '@reduxjs/toolkit';
import authSlice from '@reducers/authSlice';
import userSlice from '@reducers/userSlice';
import myJobPostingsSlice from '@reducers/myJobPostingsSlice';
import recruiterScreenSlice from '@reducers/recruiterScreenSlice';
import jobSlice from '@reducers/jobSlice';

export default configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    myJobPostings: myJobPostingsSlice,
    recruiterScreen: recruiterScreenSlice,
    job: jobSlice,
  }
});