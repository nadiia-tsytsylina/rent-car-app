import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://652001ef906e276284c3e294.mockapi.io/api/";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/advert");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
