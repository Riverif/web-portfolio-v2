import { SmoothScroll } from "@/components/smooth-scroll";
import { Hero } from "./_components/hero";
import { Section2 } from "./_components/section-2";
// import { Section3 } from "./_components/section-3";
import { Section4 } from "./_components/section-4";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Hero />
      <Section2 />
      {/* <Section3 /> */}
      <Section4 />
    </>
  );
}
