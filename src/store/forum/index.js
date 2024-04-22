import { createSlice, current } from '@reduxjs/toolkit';

const { actions: forumActions, reducer: forumReducer } = createSlice({
  name: 'forum',
  initialState: {
    value: [],
  },
  reducers: {
    createForum: (state, { payload }) => {
      const items = state.value.length;

      state.value.push({
        id: items ? items + 1 : 1,
        value: payload,
      });
    },
    deleteForum: (state, { payload, getState }) => {
      console.log('state', current(state.value));
      console.log('payload', payload);
    },
  },
});

export default forumReducer;
export const { createForum, deleteForum } = forumActions;
