import React from "react";
import Delivery from "@/public/Delivery.png";
import Delivery2 from "@/public/Delivery2.png";
import Image from "next/image";
export default function Dilevery() {
  return (
    <div className="container justify-center flex  mx-auto mt-20 mb-32 md:min-h-[60rem]b pb-4 w-[95%] h-auto ">
      <div className="flex px-4 py-3 md:px-16 md:py-10 w-full flex flex-row justify-between items-center bg-neutral-200 rounded-3xl">
        <div className="flex flex-col max-w-3xl">
          <h1 className="uppercase text-left responsive-subtitles text-lg md:text-2xl lg:text-4xl xl:text-5xl">
            Seamless Delivery for Your Custom Palettes
          </h1>
          <p className="text-neutral-600 text-left text-xs md:text-sm lg:text-base xl:text-xl">
            Enjoy doorstep delivery for your personalized plastic palettes,
            ensuring a hassle-free experience from design to doorstep.
          </p>
        </div>
        <div className="card max-w-[18rem] justify-center gap-2 items-center flex flex-row">
          <Image src={Delivery2} className="flex h-fit w-auto" alt="Delivery" />
          <Image src={Delivery} className="flex h-fit w-auto" alt="Delivery" />
        </div>
      </div>
    </div>
  );
}
