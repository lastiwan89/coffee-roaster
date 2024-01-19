import React from "react";

export default function Button({
  text = "Create your plan",
}: {
  text?: string;
}) {
  return (
    <button className="rounded-sm bg-cyan-dark px-8 py-4 font-serif text-[18px] font-black leading-[25px] text-cream-light hover:bg-cyan-light">
      {text}
    </button>
  );
}
