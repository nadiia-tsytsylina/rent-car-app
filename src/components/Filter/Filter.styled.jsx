import styled from "@emotion/styled";
import { Form, Field } from "formik";

export const FilterContainer = styled.div`
  margin-bottom: 50px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;
    gap: 18px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
`;

export const StyledSelect = styled(Field)`
  font-size: 18px;
  line-height: 1.33;
  font-weight: 500;
  font-family: Manrope;
  color: var(--dark-text);
  width: 100%;
  height: 48px;
  padding-left: 14px;
  border: none;
  background-color: var(--light-background);
  border-radius: 14px;
  outline: none;

  @media (min-width: 834px) {
    width: 224px;
  }
`;

export const StyledOption = styled.option`
  font-size: 16px;
  line-height: 1.25;
  font-weight: 500;
  color: rgba(18, 20, 23, 0.2);
  font-family: Manrope, sans-serif;
`;

export const StyledInput = styled(Field)`
  font-size: 18px;
  line-height: 1.33;
  font-weight: 500;
  font-family: Manrope;
  color: var(--dark-text);
  width: 50%;
  height: 48px;
  padding-left: 14px;
  border: none;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background-color: var(--light-background);
  outline: none;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  @media (min-width: 834px) {
    width: 160px;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 136px;
  height: 48px;
  background-color: var(--accent-color);
  color: #fff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  border: none;
  border-radius: 12px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: var(--dark-blue);
  }
`;
