// import { configureStore } from "@reduxjs/toolkit";
// import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
// import { userReducer } from './reducers';

// export const store = configureStore({
//   reducer: { user: userReducer },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ serializableCheck: false }),
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


// import { configureStore } from '@reduxjs/toolkit';
// import { userReducer } from './reducers';

// const store = configureStore({
//   reducer: { user: userReducer }
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
});

export default store;