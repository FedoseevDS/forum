import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.users = [...state.users, payload];
    },
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
