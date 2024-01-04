import React from "react";

export default function Button({
  text = "Create your plan",
}: {
  text?: string;
}) {
  return (
    <button className="bg-cyan-dark hover:bg-cyan-light text-cream-light rounded-sm px-8 py-4 font-serif text-[18px] font-black leading-[25px]">
      {text}
    </button>
  );
}
