import { configureStore } from '@reduxjs/toolkit';
import authSlice from '@reducers/authSlice';
import userSlice from '@reducers/userSlice';
import myJobPostingsSlice from '@reducers/myJobPostingsSlice';
import recruiterScreenSlice from '@reducers/recruiterScreenSlice';
import jobSlice from '@reducers/jobSlice';
import applicantScreenSlice from '@reducers/applicantScreenSlice';
import pageSlice from '@reducers/pageSlice';

export default configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    myJobPostings: myJobPostingsSlice,
    recruiterScreen: recruiterScreenSlice,
    job: jobSlice,
    applicantScreen: applicantScreenSlice,
    page: pageSlice,
  }
});