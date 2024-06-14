"use client";
import React from "react";
import {Fragment} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./components/canvas-reveal-effect";
import { MovingBorderDemo } from "./MovingBorder";

interface IContainerData {
  title: string;
  description: string;

}

export function CanvasRevealEffectDemo({ data }: {data: IContainerData[]}) {
  let containerclass = ["bg-emerald-900", "bg-black", "bg-sky-600"]

  return (
    <div>
      {data && (
        <>
          <h1 className="text-neutral-400 text-5xl text-center font-bold">
            My Three Value Propositions
          </h1>

          <div className="max-w-7xl py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
            {data.map((item, index)=> (
                <Fragment key={index}>
                  <Card
                    title={item.title}
                    description={item.description}
                    icon={<MovingBorderDemo text={item.title} />}
                  >
                    <CanvasRevealEffect
                      animationSpeed={3}
                      containerClassName={containerclass[index]}
                      colors={[
                        [255, 255, 255],
                        [255, 255, 255],
                      ]}
                      dotSize={2}
                    />
                    {/* Radial gradient for the cute fade */}
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                  </Card>
                </Fragment>
            ))}
            
          </div>
        </>
      )}
    </div>
  );
}

const Card = ({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description?: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border rounded border-slat-800/[0.2] bg-zinc-950   group/canvas-card flex items-center justify-center dark:border-white/[0.2]  w-[20rem] md:w-[25rem] mx-auto p-4  h-[25rem] md:h-[30rem] relative"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          // add this for making it center
          // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          // change text-3xl, add text-center
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        {/* add this one for the description */}
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
