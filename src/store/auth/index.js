import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: {
    login: '',
    password: '',
    isAuth: false,
    id: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.profile.login = payload.login;
      state.profile.password = payload.password;
      state.profile.isAuth = payload.isAuth;
      state.profile.id = payload.userId;

      delete state.id;
      delete state.isAuth;
      delete state.login;
      delete state.password;
    },
    removeAuth: (state, { payload }) => {
      // state.login = payload.login;
      // state.password = payload.password;
      // state.isAuth = payload.isAuth;
      // state.id = payload.id;

      state.profile = { login: null, password: null, isAuth: false, id: null };
    },
  },
});

export const { setAuth, removeAuth } = authSlice.actions;
export default authSlice.reducer;
