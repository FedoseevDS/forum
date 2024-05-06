import { createSlice, current } from '@reduxjs/toolkit';

const { actions: forumActions, reducer: forumReducer } = createSlice({
  name: 'forum',
  initialState: {
    value: [],
  },
  reducers: {
    createForum: (state, { payload }) => {
      // const items = state.value.length;

      // TODO: убрать value

      console.log('payload', payload);

      state.value.push({
        id: payload.id,
        value: payload.value,
        title: payload.title,
        // depth: payload.depth,
        parentId: payload.topicId || null,
      });
    },
    deleteForum: (state, { payload }) => {
      state.value = state.value.filter(({ id }) => id !== payload.id);
    },
  },
});

export default forumReducer;
export const { createForum, deleteForum } = forumActions;
