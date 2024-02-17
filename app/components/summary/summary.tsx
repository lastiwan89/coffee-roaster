"use client";
import React from "react";
import { useAppSelector } from "../../lib/hooks";
import { RootState } from "../../lib/store";

export default function Summary() {
  const initialFilter = useAppSelector(
    (state: RootState) => state.filter.value,
  );
  const initialBlend = useAppSelector((state: RootState) => state.blend.value);
  const initialWeight = useAppSelector(
    (state: RootState) => state.weight.value,
  );
  const initialGrind = useAppSelector((state: RootState) => state.grind.value);
  const initialDeliver = useAppSelector(
    (state: RootState) => state.deliver.value,
  );
  return (
    <div>
      <p className="font-serif text-24 font-black text-cream-light">
        “I drink my coffee as{" "}
        <span className="text-cyan-dark">{initialFilter}</span>, with a{" "}
        <span className="text-cyan-dark">{initialBlend}</span> type of bean.{" "}
        <span className="text-cyan-dark">{initialWeight}</span> ground ala{" "}
        <span className="text-cyan-dark">{initialGrind}</span>, sent to me{" "}
        <span className="text-cyan-dark">{initialDeliver}</span>.”
      </p>
    </div>
  );
}
