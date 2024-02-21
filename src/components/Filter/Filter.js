import { Formik } from "formik";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { selectAllAdverts, selectIsFiltered } from "redux/selectors";
import { resetFilter, updateFilter } from "redux/filterSlice";
import { MIN_MILEAGE, MAX_MILEAGE, MAX_PRICE } from "constants/constants";
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
  const isFiltered = useSelector(selectIsFiltered);

  const allBrands = new Array(
    ...allAdverts
      .map((item) => item.make)
      .filter((make, index, array) => array.indexOf(make) === index)
      .sort((a, b) => a.localeCompare(b))
  );

  const allPrices = new Array(
    ...allAdverts
      .map((item) => Number(parseFloat(item.rentalPrice.replace("$", ""))))
      .filter((price, index, array) => array.indexOf(price) === index)
      .sort((a, b) => a - b)
  );

  const handleSubmit = ({ brand, price, minMileage, maxMileage }, actions) => {
    if (minMileage && maxMileage && minMileage >= maxMileage) {
      toast.error("Minimal mileage can't be bigger than maximal mileage");
      return;
    }
    dispatch(updateFilter({ brand, price, minMileage, maxMileage }));
  };

  const clearFilters = () => {
    dispatch(resetFilter());
  };

  return (
    <FilterContainer>
      <Formik
        initialValues={{
          brand: "",
          price: MAX_PRICE,
          minMileage: MIN_MILEAGE,
          maxMileage: MAX_MILEAGE,
        }}
        onSubmit={handleSubmit}
      >
        {({ resetForm }) => (
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
                  <StyledOption key={item} value={item}>
                    {item}
                  </StyledOption>
                ))}
              </StyledSelect>
            </SelectContainer>
            <SelectContainer>
              <Label htmlFor="price">Max price/ 1 hour</Label>
              <StyledSelect
                as="select"
                name="price"
                id="price"
                placeholder="To a $"
                required
              >
                <StyledOption disabled hidden value=""></StyledOption>
                {allPrices.map((item) => (
                  <StyledOption key={item} value={item}>
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
                  min={MIN_MILEAGE}
                  max={MAX_MILEAGE}
                  required
                />
                <StyledInput
                  name="maxMileage"
                  placeholder="To"
                  type="number"
                  min={MIN_MILEAGE}
                  max={MAX_MILEAGE}
                  required
                  style={{
                    borderRadius: "0px 14px 14px 0px",
                    borderRight: "none",
                  }}
                />
              </div>
            </SelectContainer>
            <SearchButton type="submit">Search</SearchButton>
            {isFiltered && (
              <SearchButton
                type="button"
                onClick={() => {
                  clearFilters();
                  resetForm();
                }}
              >
                Clear filters
              </SearchButton>
            )}
          </StyledForm>
        )}
      </Formik>
    </FilterContainer>
  );
}
