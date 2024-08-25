
import { configureStore } from '@reduxjs/toolkit';
import widgetReducer from './widgetReducer';

const store = configureStore({
  reducer: {
    widgets: widgetReducer,
  },
});

export default store;
