import React, { useEffect, useState, useRef } from "react";

import { motion } from "framer-motion";
import { ThreeDCardDemo } from "./3Card";

interface IDataItem {
    id: string;
    title: string;
    description: string;
    imageurl: string;
    link: string;
}

export function ProjectCarousel({data}: {data: IDataItem[] }) {
    const [width, setWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setWidth(containerRef.current.offsetWidth - containerRef.current.scrollWidth);
            }
        };
        updateWidth();
    }, []);

    return (
        <div>
            <h1 className="text-neutral-400 text-5xl text-center font-bold">My Cool Projects</h1>
            <motion.div ref={containerRef}
                drag="x"
                dragConstraints={{ right: 0, left: width }}
                className="flex space-x-2 justify-content px-4">
                {data && data.map((value) => (
                    <div key={value.id} className="flex overflow-x min-w-fit cursor-grab ">
                        <ThreeDCardDemo title={value.title} description={value.description} imageurl={value.imageurl} link={value.link} />
                    </div>
                ))}
            </motion.div>
        </div>

    )
}