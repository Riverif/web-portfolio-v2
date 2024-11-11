"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const parentMotion: Variants = {
  hover: {
    width: 175,
    transition: {
      duration: 0.2,
    },
  },
};
const iconMotion: Variants = {
  initial: {
    x: -20,
    opacity: 0,
    transition: { duration: 0.1 },
  },
  hover: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.2,
    },
  },
};

export const ExpandButton2 = () => {
  return (
    <motion.button
      className="flex w-[150px] items-center rounded-full py-2 pl-10 font-bold transition-colors"
      variants={parentMotion}
      initial="initial"
      whileHover="hover"
      animate="initial"
    >
      Email Me
      <motion.div className="pl-2" variants={iconMotion}>
        <ArrowRight />
      </motion.div>
    </motion.button>
  );
};
