"use client";
import { FlipWords } from "./components/flip-word";
import { TextGenerateEffectDemo } from "./TextGeneration";

export function TextGenerateSwap({ text }: { text: string }) {
  const words = ["perfect", "ready", "ideal"];

  return (
    <div className="mx-6 md:mx-36 my-20 sm:py-0">
      <div className="h-[40rem] flex justify-center items-center my-px-4 sm:px-4">
        <div className="text-4xl mx-auto font-normal  text-neutral-300 dark:text-neutral-400">
          Why I am
          <FlipWords words={words} />
          for this role
          <TextGenerateEffectDemo text={text} />
        </div>
      </div>
    </div>
  );
}
