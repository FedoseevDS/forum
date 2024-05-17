import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  isAuth: false,
  userId: null,
  name: null,
  signature: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.email = payload.email;
      state.isAuth = payload.isAuth;
      state.userId = payload.userId;
      state.name = payload.name;
      state.signature = payload.signature;
    },
    removeAuth: (state) => {
      state.email = null;
      state.userId = null;
      state.isAuth = false;
      state.name = null;
      state.signature = null;
    },
    updateAuth: (state, { payload }) => {
      state.name = payload.name;
      state.signature = payload.signature;
    },
  },
});

export const { setAuth, removeAuth, updateAuth } = authSlice.actions;
export default authSlice.reducer;
