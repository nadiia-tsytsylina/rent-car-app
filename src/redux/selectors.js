import { createSelector } from "@reduxjs/toolkit";

export const selectAdvertsByPage = (state) => state.adverts.items;
export const selectAllAdverts = (state) => state.adverts.allItems;
export const selectIsLoading = (state) => state.adverts.isLoading;
export const selectError = (state) => state.adverts.error;

export const selectFavorites = (state) => state.favorites.items;

export const selectIsFiltered = (state) => state.filter.isFiltered;
export const selectFilteredBrand = (state) => state.filter.brand;
export const selectFilteredPrice = (state) => state.filter.price;
export const selectFilteredMileage = (state) => state.filter.mileage;

export const selectFilteredAdverts = createSelector(
  [
    selectAllAdverts,
    selectFilteredBrand,
    selectFilteredPrice,
    selectFilteredMileage,
  ],
  (adverts, brand, price, mileage) => {
    return adverts
      .filter((advert) => advert.make === brand)
      .filter(
        (advert) =>
          parseFloat(advert.rentalPrice.replace("$", "")) <= Number(price)
      )
      .filter(
        (advert) =>
          advert.mileage >= mileage.min && advert.mileage <= mileage.max
      );
  }
);
