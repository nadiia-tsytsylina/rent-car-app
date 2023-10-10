import { createSelector } from "@reduxjs/toolkit";

export const selectAdvertsByPage = (state) => state.adverts.items;
export const selectAllAdverts = (state) => state.adverts.allItems;
export const selectIsLoading = (state) => state.adverts.isLoading;
export const selectError = (state) => state.adverts.error;

export const selectFavorites = (state) => state.favorites.items;

export const selectIsFiltred = (state) => state.filter.isFiltred;
export const selectFiltredBrand = (state) => state.filter.brand;
export const selectFiltredPrice = (state) => state.filter.price;
export const selectFiltredMileage = (state) => state.filter.mileage;

export const selectFiltredAdverts = createSelector(
  [
    selectAllAdverts,
    selectFiltredBrand,
    selectFiltredPrice,
    selectFiltredMileage,
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
