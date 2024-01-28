import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./features/coffeeFavours/filterSlice";
import blendSlice from "./features/coffeeFavours/blendSlice";
import weightSlice from "./features/coffeeFavours/weightSlice";
import grindSlice from "./features/coffeeFavours/grindSlice";
import deliverSlice from "./features/coffeeFavours/deliverSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      filter: filterSlice,
      blend: blendSlice,
      weight: weightSlice,
      grind: grindSlice,
      deliver: deliverSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
