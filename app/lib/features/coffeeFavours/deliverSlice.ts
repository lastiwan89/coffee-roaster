import { SliceType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState: SliceType = {
  value: "Every week",
  toggle: false,
};

const deliverSlice = createSlice({
  name: "deliver",
  initialState,
  reducers: {
    setDeliver: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setDeliverToggle: (state, action: PayloadAction<boolean>) => {
      state.toggle = action.payload;
    },
  },
});

export const { setDeliver, setDeliverToggle } = deliverSlice.actions;
export const initializeDeliver = (state: RootState) => {
  state.deliver.value;
};
export default deliverSlice.reducer;
