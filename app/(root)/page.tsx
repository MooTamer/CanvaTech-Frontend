// "use client";
import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { Waitlist } from "@/components/shared/waitlist";
import { HeroScroll } from "@/components/shared/scrollTest";
import { CustomerReviews } from "@/components/shared/customer-reviews";

export default function Home() {
  return (
    <div className="div">
      <Spotlight />
      <div className="h-screen w-screen relative flex flex-col items-center space-around justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center "></div>
        <h1 className="text-5xl sm:text-7xl font-bold z-20 transparent-text py-12 from-neutral-50 to-neutral-700">
          CanvaTech
        </h1>
        <p className="text-3xl sm:text-4xl my-8 font-bold z-20 transparent-text from-neutral-50 to-neutral-700 py-12">
          Designing dreams, one palette at a time.
        </p>
      </div>
      <CustomerReviews />
      <HeroScroll />
      <Waitlist />
    </div>
  );
}
