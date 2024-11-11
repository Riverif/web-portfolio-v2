"use client";

import { motion, Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";

const parentMotion: Variants = {
  hover: {
    width: 150,
    transition: {
      duration: 0.2,
    },
  },
};
const iconMotion: Variants = {
  initial: {
    y: -20,
    opacity: 0,
    transition: { duration: 0.1 },
  },
  hover: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.2,
    },
  },
};

export const ExpandButton = () => {
  return (
    <motion.button
      className="flex w-[140px] items-center rounded-full bg-slate-600 py-2 pl-8 text-white transition-colors hover:bg-slate-700"
      variants={parentMotion}
      initial="initial"
      whileHover="hover"
      animate="initial"
    >
      Contact Me
      <motion.div className="pl-2" variants={iconMotion}>
        <ArrowDown className="h-4 w-4" />
      </motion.div>
    </motion.button>
  );
};
