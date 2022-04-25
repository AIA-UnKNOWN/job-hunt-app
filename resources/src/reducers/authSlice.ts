import { createSlice } from '@reduxjs/toolkit';

const AUTH_SCREENS = [
  'default',
  'register as recruiter',
  'register as applicant',
  'login as recruiter',
  'login as applicant'
];

interface AuthState {
  currentAuth: string
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentAuth: AUTH_SCREENS[3], // default 0
  },
  reducers: {
    setCurrentAuth: (state, action) => {
      state.currentAuth = action.payload;
    }
  }
});

export type { AuthState };
export { AUTH_SCREENS };
export const { setCurrentAuth } = authSlice.actions;
export default authSlice.reducer;