import { configureStore } from "@reduxjs/toolkit";
import mobileMenuReducer from "./features/mobileMenu/mobileMenuSlice";

export const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;