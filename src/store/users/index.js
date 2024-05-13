import { createSlice, current } from '@reduxjs/toolkit';

const initialState = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state = state.push({ ...payload });
    },
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
