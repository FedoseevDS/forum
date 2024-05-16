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
      const { name, signature, userId } = payload;

      state = state.reduce((prev, item) => {
        if (item.user.userId === userId) {
          item.user.name = name;
          item.user.signature = signature;
        }

        if (item?.children?.some((item) => item.userId === userId)) {
          item.children.forEach((item) => {
            if (item.userId === userId) {
              item.name = name;
              item.signature = signature;
            }
          });
        }

        return [...prev, item];
      }, []);
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
