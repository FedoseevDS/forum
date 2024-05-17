import { createSlice, current } from '@reduxjs/toolkit';

const initialState = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.push({ ...payload });
    },
    updateUser: (state, { payload }) => {
      return state.map((user) =>
        user.userId === payload.userId
          ? { ...user, name: payload.name, signature: payload.signature }
          : user,
      );
    },
  },
});

export const { addUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;
