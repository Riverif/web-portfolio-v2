"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { Hammersmith_One } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Project } from "@/app/(root)/_components/section-2";
import Link from "next/link";

const hammersmith_one = Hammersmith_One({ subsets: ["latin"], weight: "400" });

export const HighlightedProject = ({ project }: { project: Project }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const [n, setN] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const num = Math.min(latest * 2 + 0.3, 1);
    setN(num);
  });

  const label = project.url.includes("github")
    ? "See the source code"
    : "Check the website";
  return (
    <motion.div
      ref={ref}
      className="flex min-h-[95vh] flex-col items-center pb-[100px]"
    >
      <div className="sticky top-20 space-y-2 md:top-10 md:w-7/12">
        <Link href={project.url} target="_blank">
          <motion.div
            className="group relative aspect-[16/8] w-full origin-top translate-x-[50%] translate-y-[500px] cursor-pointer overflow-hidden rounded-xl border border-slate-700 md:px-0"
            style={{ scale: n }}
          >
            <Image
              src={project.imageUrl}
              alt="project"
              fill
              className="object-cover transition duration-300 group-hover:scale-125"
              style={{ objectPosition: "0% 0%" }}
            />
            <div
              className={cn(
                "absolute flex h-full w-full items-center justify-center bg-black/50 text-2xl text-white opacity-0 transition group-hover:opacity-100",
                hammersmith_one.className,
              )}
            >
              <p>{label}</p>
            </div>
          </motion.div>
        </Link>
        <motion.div
          className="w-full space-y-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
        >
          <div>
            <h2 className={cn("text-2xl", hammersmith_one.className)}>
              {project.title}
            </h2>
            <div className="space-y-2">
              <p className="text-sm md:text-base">{project.description}</p>
              {project.hosted && (
                <p className="text-sm md:text-base">{`Hosted using: ${project.hosted}`}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="font-semibold">Key Features</p>
              <ul className="list-inside list-disc">
                {project.features.map((feature) => (
                  <li key={feature} className="text-xs md:text-base">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2">
              <p className="font-semibold">Tech Stack</p>
              <ul className="list-inside list-decimal columns-2">
                {project.techstack.map((item) => (
                  <li key={item} className="text-xs md:text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* <div>
              <p className="font-semibold">Third Party Libraries</p>
              <ul className="list-inside list-decimal">
                {project.thirdLib.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div> */}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
