import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

// TODO: убрать дополнительный проп users: []

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.users = [...state.users, payload];
    },
  },
});

export const { addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
