"use client";
import React from "react";
import Button from "./button";
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
  const initialFilter = useAppSelector(
    (state: RootState) => state.filter.value,
  );
  const initialFilterToggle = useAppSelector(
    (state: RootState) => state.filter.toggle,
  );
  const initialBlend = useAppSelector((state: RootState) => state.blend.value);
  const initialBlendToggle = useAppSelector(
    (state: RootState) => state.blend.toggle,
  );
  const initialWeight = useAppSelector(
    (state: RootState) => state.weight.value,
  );
  const initialWeightToggle = useAppSelector(
    (state: RootState) => state.weight.toggle,
  );
  const initialGrind = useAppSelector((state: RootState) => state.grind.value);
  const initialGrindToggle = useAppSelector(
    (state: RootState) => state.grind.toggle,
  );
  const initialDeliver = useAppSelector(
    (state: RootState) => state.deliver.value,
  );
  const initialDeliverToggle = useAppSelector(
    (state: RootState) => state.deliver.toggle,
  );
  const dispatch = useAppDispatch();
  return (
    <div>
      <section>
        {/* filter */}
        <div>
          <ToggleFilter />
          {!initialFilterToggle && (
            <div className="grid md:grid-cols-3">
              {COFFEE_FILTER.map((item) => (
                <div
                  onClick={() => dispatch(setFilter(item.title))}
                  className="shadow-box grid cursor-pointer rounded-sm bg-cream-light p-6 hover:bg-cyan-dark hover:text-cream-light"
                  key={item.id}
                >
                  <p className="text-24 font-serif font-bold">{item.title}</p>
                  <p className="text-16 font-sans font-normal">{item.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* blend */}
        <div>
          <ToggleBlend />
          {!initialBlendToggle && (
            <div className="grid md:grid-cols-3">
              {COFFEE_BLEND.map((item) => (
                <div
                  onClick={() => dispatch(setBlend(item.title))}
                  className="shadow-box grid cursor-pointer rounded-sm bg-cream-light p-6 hover:bg-cyan-dark hover:text-cream-light"
                  key={item.id}
                >
                  <p className="text-24 font-serif font-bold">{item.title}</p>
                  <p className="text-16 font-sans font-normal">{item.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* weight */}
        <div>
          <ToggleWeight />
          {!initialWeightToggle && (
            <div className="grid md:grid-cols-3">
              {COFFEE_WEIGHT.map((item) => (
                <div
                  onClick={() => dispatch(setWeight(item.title))}
                  className="shadow-box grid cursor-pointer rounded-sm bg-cream-light p-6 hover:bg-cyan-dark hover:text-cream-light"
                  key={item.id}
                >
                  <p className="text-24 font-serif font-bold">{item.title}</p>
                  <p className="text-16 font-sans font-normal">{item.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* grind */}
        <div>
          <ToggleGrind />
          {!initialGrindToggle && (
            <div className="grid md:grid-cols-3">
              {COFFEE_GRIND.map((item) => (
                <div
                  onClick={() => dispatch(setGrind(item.title))}
                  className="shadow-box grid cursor-pointer rounded-sm bg-cream-light p-6 hover:bg-cyan-dark hover:text-cream-light"
                  key={item.id}
                >
                  <p className="text-24 font-serif font-bold">{item.title}</p>
                  <p className="text-16 font-sans font-normal">{item.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* deliver */}
        <div>
          <ToggleDeliver />
          {!initialDeliverToggle && (
            <div className="grid md:grid-cols-3">
              {COFFEE_DELIVER.map((item) => (
                <div
                  onClick={() => dispatch(setDeliver(item.title))}
                  className="shadow-box grid cursor-pointer rounded-sm bg-cream-light p-6 hover:bg-cyan-dark hover:text-cream-light"
                  key={item.value}
                >
                  <p className="text-24 font-serif font-bold">{item.title}</p>
                  <p className="text-16 font-sans font-normal">{item.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="my-28 grid gap-14">
        <div className="grid gap-2 rounded-md bg-grey-dark px-6 py-8">
          <p className="text-16 font-sans font-normal uppercase text-cream-light opacity-50">
            order summary
          </p>
          <p className="text-24 font-serif font-black text-cream-light">
            “I drink my coffee as{" "}
            <span className="text-cyan-dark">{initialFilter}</span>, with a{" "}
            <span className="text-cyan-dark">{initialBlend}</span> type of bean.{" "}
            <span className="text-cyan-dark">{initialWeight}</span> ground ala{" "}
            <span className="text-cyan-dark">{initialGrind}</span>, sent to me{" "}
            <span className="text-cyan-dark">{initialDeliver}</span>.”
          </p>
        </div>
        <div className="flex justify-center">
          <Button />
        </div>
      </section>
    </div>
  );
}
