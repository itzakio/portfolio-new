import { createSlice } from "@reduxjs/toolkit";

interface MobileMenuState {
  isOpen: boolean;
}

const initialState: MobileMenuState = {
  isOpen: false,
};

const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },

    close: (state) => {
      state.isOpen = false;
    },

    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },

    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { open, close, toggle, setIsOpen } =
  mobileMenuSlice.actions;

export default mobileMenuSlice.reducer;