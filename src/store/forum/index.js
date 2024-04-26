import { createSlice, current } from '@reduxjs/toolkit';

const { actions: forumActions, reducer: forumReducer } = createSlice({
  name: 'forum',
  initialState: {
    value: [],
  },
  reducers: {
    createForum: (state, { payload }) => {
      // const items = state.value.length;

      console.log('payload', payload);

      state.value.push({
        id: payload.id,
        value: payload.value,
        title: payload.title,
      });
    },
    deleteForum: (state, { payload }) => {
      state.value = state.value.filter(({ id }) => id !== payload.id);
    },
  },
});

export default forumReducer;
export const { createForum, deleteForum } = forumActions;
