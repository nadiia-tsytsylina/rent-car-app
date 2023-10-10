import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    brand: "",
    price: "",
    mileage: {
      min: null,
      max: null,
    },
    isFiltred: false,
  },
  reducers: {
    updateFilter(state, { payload }) {
      state.isFiltred = true;
      state.brand = payload.brand;
      state.price = payload.price;
      state.mileage.min = payload.minMileage;
      state.mileage.max = payload.maxMileage;
    },
    resetFilter(state) {
      state.isFiltred = false;
      state.filterBrand = "";
      state.filterPrice = "";
      state.mileage.min = "";
      state.mileage.max = "";
    },
  },
});

export const { updateFilter, resetFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
