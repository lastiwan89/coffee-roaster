import { SliceType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState: SliceType = {
  value: "250g",
  toggle: false,
};

const weightSlice = createSlice({
  name: "weight",
  initialState,
  reducers: {
    setWeight: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setWeightToggle: (state, action: PayloadAction<boolean>) => {
      state.toggle = action.payload;
    },
  },
});

export const { setWeight, setWeightToggle } = weightSlice.actions;
export const initializeWeight = (state: RootState) => {
  state.weight.value;
};
export default weightSlice.reducer;
