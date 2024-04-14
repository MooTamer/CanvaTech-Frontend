"use client";
import React from "react";
import { WaitlistDemo } from "../ui/waitlistDemo";
import { Button } from "../ui/moving-border";

export function Waitlist() {
  return (
    <div className="h-full min-h-screen w-full  rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased ">
      <div className="absolute pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_55%,black)]"></div>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Launching Soon!
        </p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to CanvaTech, where creativity knows no bounds and people are
          at the heart of everything we do. Subscribe to our newsletter to stay
          connected with the latest innovations and updates from around the
          world.
        </p>
        <input
          type="text"
          placeholder="name@email.com"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 text-neutral-400 w-full relative z-10 mt-4 p-2 bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <Button
        borderRadius="1.75rem"
        className="bg-white  dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Subscribe
      </Button>
      <WaitlistDemo />
    </div>
  );
}
