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

      state.value.push({
        id: payload.id,
        value: payload.value,
        title: payload.title,
        depth: payload.depth || null,
        parentId: payload.parentId || null,
      });
    },
    deleteForum: (state, { payload }) => {
      state.value = state.value.filter(({ id }) => id !== payload.id);
      // state.value = [];
    },
    createDiscuss: (state, { payload }) => {
      state.value.push({
        // id: payload.id,
        // value: payload.value,
        // title: payload.title,
        ...payload,
        depth: payload.depth || null,
        parentId: payload.parentId || null,
        children: [],
      });
    },
    createComment: (state, { payload }) => {
      state.value.children = state.value.children.push({ ...payload });
    },
  },
});

export default forumReducer;
export const { createForum, deleteForum, createDiscuss, createComment } = forumActions;
