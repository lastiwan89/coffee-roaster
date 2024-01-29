import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { SliceType } from "@/types";

const initialState: SliceType = {
  value: "Decaf",
  toggle: false,
};

const blendSlice = createSlice({
  name: "blend",
  initialState,
  reducers: {
    setBlend: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setBlendToggle: (state, action: PayloadAction<boolean>) => {
      state.toggle = action.payload;
    },
  },
});

export const { setBlend, setBlendToggle } = blendSlice.actions;
export const initializeBlend = (state: RootState) => state.blend.value;
export default blendSlice.reducer;
