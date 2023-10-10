import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://652001ef906e276284c3e294.mockapi.io/api/";
const limit = 8;

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

export const fetchAdvertsByPage = createAsyncThunk(
  "adverts/fetchByPage",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get("/advert", {
        params: { page: page, limit: limit },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
