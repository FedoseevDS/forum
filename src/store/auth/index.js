import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  isAuth: false,
  userId: null,
  name: null,
  signature: null,
  img: null,
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
      state.img = payload.img;
    },
    removeAuth: (state) => {
      state.email = null;
      state.userId = null;
      state.isAuth = false;
      state.name = null;
      state.signature = null;
      state.img = null;
    },
  },
});

export const { setAuth, removeAuth } = authSlice.actions;
export default authSlice.reducer;
