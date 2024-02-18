"use client";
import React from "react";
import { RootState } from "../lib/store";
import {
  COFFEE_DELIVER,
  COFFEE_FILTER,
  COFFEE_GRIND,
  COFFEE_BLEND,
  COFFEE_WEIGHT,
} from "@/constant";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { setFilter } from "../lib/features/coffeeFavours/filterSlice";
import { setBlend } from "../lib/features/coffeeFavours/blendSlice";
import { setWeight } from "../lib/features/coffeeFavours/weightSlice";
import { setGrind } from "../lib/features/coffeeFavours/grindSlice";
import { setDeliver } from "../lib/features/coffeeFavours/deliverSlice";
import ToggleFilter from "./toggle/ToggleFilter";
import ToggleGrind from "./toggle/ToggleGrind";
import ToggleBlend from "./toggle/ToggleBlend";
import ToggleWeight from "./toggle/ToggleWeight";
import ToggleDeliver from "./toggle/ToggleDeliver";

export default function CoffeePlan() {
  const initialFilterToggle = useAppSelector(
    (state: RootState) => state.filter.toggle,
  );
  const initialBlendToggle = useAppSelector(
    (state: RootState) => state.blend.toggle,
  );
  const initialWeightToggle = useAppSelector(
    (state: RootState) => state.weight.toggle,
  );
  const initialGrindToggle = useAppSelector(
    (state: RootState) => state.grind.toggle,
  );
  const initialDeliverToggle = useAppSelector(
    (state: RootState) => state.deliver.toggle,
  );
  const dispatch = useAppDispatch();
  return (
    <div>
      <section className="py-8">
        {/* filter */}
        <div className="py-8">
          <ToggleFilter />
          {!initialFilterToggle && (
            <div className="grid gap-4 md:grid-cols-3">
              {COFFEE_FILTER.map((item) => (
                <div
                  onClick={() => dispatch(setFilter(item.title))}
                  className="shadow-box grid cursor-pointer rounded-sm bg-grey-light/10 p-6 hover:bg-cyan-dark hover:text-cream-light md:gap-4 md:pb-16 md:pt-8"
                  key={item.id}
                >
                  <p className="font-serif text-24 font-bold">{item.title}</p>
                  <p className="font-sans text-16 font-normal">{item.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* blend */}
        <div className="py-8">
          <ToggleBlend />
          {!initialBlendToggle && (
            <div className="grid gap-4 md:grid-cols-3">
              {COFFEE_BLEND.map((item) => (
                <div
                  onClick={() => dispatch(setBlend(item.title))}
                  className="shadow-box grid cursor-pointer rounded-sm bg-grey-light/10 p-6 hover:bg-cyan-dark hover:text-cream-light md:gap-4 md:pb-16 md:pt-8"
                  key={item.id}
                >
                  <p className="font-serif text-24 font-bold">{item.title}</p>
                  <p className="font-sans text-16 font-normal">{item.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* weight */}
        <div className="py-8">
          <ToggleWeight />
          {!initialWeightToggle && (
            <div className="grid gap-4 md:grid-cols-3">
              {COFFEE_WEIGHT.map((item) => (
                <div
                  onClick={() => dispatch(setWeight(item.title))}
                  className="shadow-box grid cursor-pointer rounded-sm bg-grey-light/10 p-6 hover:bg-cyan-dark hover:text-cream-light md:gap-4 md:pb-16 md:pt-8"
                  key={item.id}
                >
                  <p className="font-serif text-24 font-bold">{item.title}</p>
                  <p className="font-sans text-16 font-normal">{item.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* grind */}
        <div className="py-8">
          <ToggleGrind />
          {!initialGrindToggle && (
            <div className="grid gap-4 md:grid-cols-3">
              {COFFEE_GRIND.map((item) => (
                <div
                  onClick={() => dispatch(setGrind(item.title))}
                  className="shadow-box grid cursor-pointer rounded-sm bg-grey-light/10 p-6 hover:bg-cyan-dark hover:text-cream-light md:gap-4 md:pb-16 md:pt-8"
                  key={item.id}
                >
                  <p className="font-serif text-24 font-bold">{item.title}</p>
                  <p className="font-sans text-16 font-normal">{item.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* deliver */}
        <div className="py-8">
          <ToggleDeliver />
          {!initialDeliverToggle && (
            <div className="grid gap-4 md:grid-cols-3">
              {COFFEE_DELIVER.map((item) => (
                <div
                  onClick={() => dispatch(setDeliver(item.title))}
                  className="shadow-box grid cursor-pointer rounded-sm bg-grey-light/10 p-6 hover:bg-cyan-dark hover:text-cream-light md:gap-4 md:pb-16 md:pt-8"
                  key={item.value}
                >
                  <p className="font-serif text-24 font-bold">{item.title}</p>
                  <p className="font-sans text-16 font-normal">{item.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
