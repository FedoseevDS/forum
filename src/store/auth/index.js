import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  isAuth: false,
  id: null,
  name: null,
  signature: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      console.log('payload', payload);

      state.email = payload.email;
      state.isAuth = payload.isAuth;
      state.id = payload.id;
      state.name = payload.name;
      state.signature = payload.signature;
    },
    removeAuth: (state) => {
      state.email = null;
      state.id = null;
      state.isAuth = false;
      state.name = null;
      state.signature = null;
    },
  },
});

export const { setAuth, removeAuth } = authSlice.actions;
export default authSlice.reducer;
