import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts, fetchAdvertsByPage } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    items: [],
    allItems: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allItems = action.payload;
      })
      .addCase(fetchAdverts.rejected, handleRejected)
      .addCase(fetchAdvertsByPage.pending, handlePending)
      .addCase(fetchAdvertsByPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        if (action.meta.arg === 1) {
          state.items = action.payload;
        } else {
          state.items.push(...action.payload);
        }
      })
      .addCase(fetchAdvertsByPage.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
