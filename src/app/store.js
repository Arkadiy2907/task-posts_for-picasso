import { configureStore } from '@reduxjs/toolkit';
import { api } from './Api';

const store = configureStore({
  reducer: {
    api: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;