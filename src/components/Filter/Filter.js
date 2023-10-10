import { nanoid } from "@reduxjs/toolkit";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { selectAllAdverts } from "redux/selectors";
import { updateFilter } from "redux/filterSlice";

import {
  FilterContainer,
  StyledForm,
  SelectContainer,
  Label,
  StyledSelect,
  StyledOption,
  StyledInput,
  SearchButton,
} from "./Filter.styled";

export default function Filter() {
  const dispatch = useDispatch();
  const allAdverts = useSelector(selectAllAdverts);
  const allBrands = new Array(
    ...allAdverts
      .map((item) => item.make)
      .filter((make, index, array) => array.indexOf(make) === index)
  );
  const priceList = [
    30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180,
    190, 200,
  ];

  const handleSubmit = ({ brand, price, minMileage, maxMileage }, actions) => {
    if (minMileage && maxMileage && minMileage >= maxMileage) {
      toast.error("Minimal mileage can't be bigger than maximal mileage");
      return;
    }
    dispatch(updateFilter({ brand, price, minMileage, maxMileage }));
  };

  return (
    <FilterContainer>
      <Formik
        initialValues={{
          brand: "",
          price: "",
          minMileage: "",
          maxMileage: "",
        }}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <SelectContainer>
            <Label htmlFor="brand">Car brand</Label>
            <StyledSelect
              as="select"
              name="brand"
              id="brand"
              placeholder="Select a car brand"
              required
            >
              <StyledOption disabled hidden value=""></StyledOption>
              {allBrands.map((item) => (
                <StyledOption key={nanoid()} value={item}>
                  {item}
                </StyledOption>
              ))}
            </StyledSelect>
          </SelectContainer>
          <SelectContainer>
            <Label htmlFor="price">Price/ 1 hour</Label>
            <StyledSelect
              as="select"
              name="price"
              id="price"
              placeholder="To a $"
              required
            >
              <StyledOption disabled hidden value=""></StyledOption>
              {priceList.map((item) => (
                <StyledOption key={nanoid()} value={item}>
                  {item}
                </StyledOption>
              ))}
            </StyledSelect>
          </SelectContainer>

          <SelectContainer>
            <Label>Сar mileage / km</Label>
            <div>
              <StyledInput
                name="minMileage"
                placeholder="From"
                type="number"
                min={1000}
                max={10000}
                required
              />
              <StyledInput
                name="maxMileage"
                placeholder="To"
                type="number"
                min={1000}
                max={10000}
                required
                style={{
                  borderRadius: "0px 14px 14px 0px",
                  borderRight: "none",
                }}
              />
            </div>
          </SelectContainer>
          <SearchButton type="submit">Search</SearchButton>
        </StyledForm>
      </Formik>
    </FilterContainer>
  );
}
