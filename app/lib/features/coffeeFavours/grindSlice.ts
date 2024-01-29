import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { SliceType } from "@/types";

const initialState: SliceType = {
  value: "Cafetiére",
  toggle: false,
};

const grindSlice = createSlice({
  name: "grind",
  initialState,
  reducers: {
    setGrind: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setGrindToggle: (state, action: PayloadAction<boolean>) => {
      state.toggle = action.payload;
    },
  },
});

export const { setGrind, setGrindToggle } = grindSlice.actions;
export const initializeGrind = (state: RootState) => {
  state.filter.value;
};
export default grindSlice.reducer;
