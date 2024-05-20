import { configureStore } from '@reduxjs/toolkit';
import { PERSIST, REHYDRATE } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';

import { reducer } from './reducer';

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PERSIST],
      },
    }),
});

export const persistor = persistStore(store);
