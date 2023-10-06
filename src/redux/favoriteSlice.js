import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
    addFavorites(state, action) {
      state.items.push(action.payload);
    },
    deleteFavorites(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const { addFavorites, deleteFavorites } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
