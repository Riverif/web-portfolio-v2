"use client";

import { cn } from "@/lib/utils";
import { Hammersmith_One } from "next/font/google";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const hammersmith_one = Hammersmith_One({ subsets: ["latin"], weight: "400" });

const animHero = (delay: number): Variants => ({
  initial: {
    y: 20,
    opacity: 0,
  },
  inView: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.6,
      delay,
    },
  },
});

export const Hero = () => {
  return (
    <div className="flex h-[95vh] flex-col justify-start px-4 py-6 pb-32 md:justify-between md:px-12">
      <p className={cn("text-xl text-gray-800", hammersmith_one.className)}>
        Rifki Alfian Nahar
      </p>
      <div className="flex flex-col justify-between pt-5 md:flex-row">
        <div className="hidden md:block"></div>
        <motion.div
          className="space-y-2 md:place-self-end"
          initial="initial"
          whileInView="inView"
        >
          <motion.div
            variants={animHero(0)}
            className="relative z-10 aspect-video w-full overflow-hidden rounded-lg md:h-[500px] md:w-[38vw]"
          >
            <Image
              src="/test.JPG"
              alt="profile"
              fill
              style={{
                objectFit: "cover",
                zIndex: -10,
                // objectPosition: "20% 60%",
              }}
            />
          </motion.div>
          <motion.p
            variants={animHero(0.4)}
            className="text-end text-xs md:text-base"
          >
            Rifki Alfian Nahar, Cum-Laude Graduate Electrical Engineering
          </motion.p>
        </motion.div>
        <motion.div
          className={cn(
            "mt-5 place-content-end text-[9vw] leading-[9vw] text-gray-500 md:absolute md:bottom-36 md:mt-0 md:text-8xl md:leading-[100px]",
            hammersmith_one.className,
          )}
          initial="initial"
          whileInView="inView"
        >
          <motion.h1 variants={animHero(0)}>Fullstack Developer</motion.h1>
          <motion.h1 variants={animHero(0.4)}>Next.Js Specialist</motion.h1>
          <motion.h1 variants={animHero(0.8)}>Tech Entusiast</motion.h1>
        </motion.div>
      </div>
    </div>
  );
};
