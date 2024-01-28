import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { SliceType } from "@/types";

const initialState: SliceType = {
  value: "Cafetiére",
};

const grindSlice = createSlice({
  name: "grind",
  initialState,
  reducers: {
    setGrind: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setGrind } = grindSlice.actions;
export const initializeGrind = (state: RootState) => {
  state.filter.value;
};
export default grindSlice.reducer;
