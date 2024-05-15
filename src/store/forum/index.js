import { createSlice, current } from '@reduxjs/toolkit';

const { actions: forumActions, reducer: forumReducer } = createSlice({
  name: 'forum',
  initialState: [],
  reducers: {
    createForum: (state, { payload }) => {
      state = state.push({
        ...payload,
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
      const item = state.find(({ id }) => id === payload.discussId);
      state = item.children.push({ ...payload });
    },
    deleteComment: (state, { payload }) => {
      const item = state.find(({ id }) => id === payload.discussId);
      item.children = item.children.filter(({ commentId }) => commentId !== payload.commentId);
    },
    updateForum: (state, { payload }) => {
      const item = state.find(({ user }) => user.userId === payload.userId);
      item.user.name = payload.name;
      item.user.signature = payload.signature;
    },
  },
});

export default forumReducer;
export const {
  createForum,
  deleteForum,
  createDiscuss,
  createComment,
  deleteComment,
  updateForum,
} = forumActions;
