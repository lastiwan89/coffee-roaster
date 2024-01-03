import React from "react";

export default function Button({ text }: { text: string }) {
  return <button className="p-4">{text}</button>;
}
