import { createSlice } from "@reduxjs/toolkit";
import customers from "../data/customers";

const initialState = {
  customers: customers,
};

export const customersSlice = createSlice({
  name: "customers",
  initialState,
});
