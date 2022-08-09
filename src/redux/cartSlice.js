import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 3, name: "White and Black", count: 2 },
    { id: 4, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    increaseCount(state, action) {
      let idx = state.findIndex((a) => a.id === action.payload);
      state[idx].count++;
    },
    addItem(state, action) {
      let idx = state.findIndex((a) => a.id === action.payload.id);
      if (idx >= 0) {
        state[idx].count += action.payload.count;
      } else {
        state.push(action.payload);
      }
    },
    deleteItem(state, action) {
      let idx = state.findIndex((a) => a.id === action.payload);
      state.splice(idx, 1);
    },
  },
});

export let { increaseCount, addItem, deleteItem } = cart.actions;

export default cart;
