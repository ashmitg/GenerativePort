"use client";
import React from "react";
import { Button } from "./components/moving-border";

export function MovingBorderDemo({ text }: { text: String }) {
  return (
    <div>
      <Button
        borderRadius="3.50rem"
        className="bg-slate-900  text-white  border-slate-800"
      >
        {text}
      </Button>
    </div>
  );
}
