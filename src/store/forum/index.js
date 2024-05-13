import { createSlice, current } from '@reduxjs/toolkit';

const { actions: forumActions, reducer: forumReducer } = createSlice({
  name: 'forum',
  initialState: [],
  reducers: {
    createForum: (state, { payload }) => {
      state = state.push({
        ...payload,
        depth: payload.depth || null,
        parentId: payload.parentId || null,
      });
    },
    deleteForum: (state, { payload }) => {
      return state.filter((item) => item.id !== payload.id);
    },
    createDiscuss: (state, { payload }) => {
      state.push({
        ...payload,
        depth: payload.depth || null,
        parentId: payload.parentId || null,
        children: [],
      });
    },
    createComment: (state, { payload }) => {
      console.log('payload', payload);
      const item = state.find(({ id }) => id === payload.discussId);
      console.log('item', current(item));
      console.log('state', current(state));
      state = item.children.push({ ...payload });
    },
    deleteComment: (state, { payload }) => {
      const item = state.find(({ id }) => id === payload.discussId);
      item.children = item.children.filter(({ commentId }) => commentId !== payload.commentId);
    },
  },
});

export default forumReducer;
export const { createForum, deleteForum, createDiscuss, createComment, deleteComment } =
  forumActions;
