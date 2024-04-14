import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { Globe } from "@/components/shared/globe";
import { Waitlist } from "@/components/shared/waitlist";
// import { Pointer } from "@/components/shared/pointer";
// import { FollowerPointerCard } from "@/components/ui/following-pointer";

export default function Home() {
  return (
    <>
      <Spotlight />
      <div className="h-screen w-screen dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center space-around justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)]"></div>
        <h1 className="text-5xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-16">
          CanvaTech
        </h1>
        <p className="text-3xl sm:text-4xl my-8 font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-16">
          Designing dreams, one palette at a time.
        </p>
      </div>
      <Globe />
      
      <Waitlist />
    </>
  );
}
