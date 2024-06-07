import { HoverEffect } from "@/components/aceternity/components/card-hover-effect";

export function CardHoverEffectDemo({ data }: { data: any }) {
  return (
    <div className="max-w-5xl mx-auto px-8 border border-grey rounded-md bg-indigo-600 bg-opacity-5">
      <h2 className="mt-4 text-center text-xl md:text-4xl font-bold bg-gradient-to-r from-neutral-200 to-neutral-300 bg-clip-text text-transparent dark:text-black">
        My Tech Stack
      </h2>
      <HoverEffect items={data} />
    </div>
  );
}
