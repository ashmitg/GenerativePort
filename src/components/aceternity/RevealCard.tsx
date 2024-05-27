"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/aceternity/components/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center h-[40rem] rounded-2xl w-full">
      <TextRevealCard text="De Anza College" revealText="Transferring Soon!">
        <TextRevealCardTitle>Current College</TextRevealCardTitle>
        <TextRevealCardDescription>
          Hover to see the status!
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
