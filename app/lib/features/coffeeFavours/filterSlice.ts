import { SliceType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState: SliceType = {
  value: "Filter",
  toggle: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setFilterToggle: (state, action: PayloadAction<boolean>) => {
      state.toggle = action.payload;
    },
  },
});

export const { setFilter, setFilterToggle } = filterSlice.actions;
export const initializeFilter = (state: RootState) => {
  state.filter.value;
};
export default filterSlice.reducer;
