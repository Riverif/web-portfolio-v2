"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis();

    // lenis.on("scroll", (e: Lenis) => {
    //   console.log(e);
    // });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <></>;
};
