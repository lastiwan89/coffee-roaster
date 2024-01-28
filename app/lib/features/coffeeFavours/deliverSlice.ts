import { SliceType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState: SliceType = {
  value: "Every week",
};

const deliverSlice = createSlice({
  name: "deliver",
  initialState,
  reducers: {
    setDeliver: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setDeliver } = deliverSlice.actions;
export const initializeDeliver = (state: RootState) => {
  state.deliver.value;
};
export default deliverSlice.reducer;
