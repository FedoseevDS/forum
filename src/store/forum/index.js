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
