import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    cart_elements: [0],
  },
  reducers: {
    add_element: (state, action) => {
      state.cart_elements.push(action.payload);
    },
    remove_element: (state, action) => {
      const indexOfElement = state.cart_elements.indexOf(action.payload);
      if (indexOfElement !== -1) {
        state.cart_elements.splice(indexOfElement, 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { add_element, remove_element } = counterSlice.actions;

export default counterSlice.reducer;
