import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state,action) => {
        state.item.push(action.payload);
    },
    clearItem: (state) => {
        state.item = [];
    },
  },
});


export const {addItem,clearItem} = cardSlice.actions;
export default cardSlice.reducer;