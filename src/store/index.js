import { combineReducers, configureStore } from '@reduxjs/toolkit';
import forum from './forum';

const reducer = combineReducers({
  forum,
});

const store = configureStore({
  reducer,
});

export default store;
