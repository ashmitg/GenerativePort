import {
  HeroHighlight,
  Highlight,
} from "@/components/aceternity/components/hero-highlight";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export function HeroHighlightDemo() {
  return (
    <>
      <HeroHighlight className="absolute">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-400 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Full-Stack Developer <br />
          <Highlight className="text-black dark:text-white break-normal">
            Studying Computer Science
          </Highlight>
          {/* <div className="flex flex-rows justify-center my-5 space-x-5">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/user" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div> */}
          
        </motion.h1>
        
      </HeroHighlight>
    </>
  );
}
