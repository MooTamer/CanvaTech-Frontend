import { Check } from "lucide-react";
import React from "react";

export default function Pricings() {
  return (
    <div className="container justify-center min-h-[30rem] mt-40 flex flex-col mx-auto h-auto xl:my-32 xl:py-8 ">
      <h1 className=" text-center mb-20 mt-4 responsive-subtitles">
        Pricing Plans
      </h1>
      <div className=" grid-cols-2 lg:grid-col-2 sm:grid-col-1 h-auto justify-center   z-30  grid gap-4 p-7 rounded-[41px]">
        <div className="flex flex-col mx-auto w-[25rem] h-[auto] justify-between bg-neutral-100 rounded-[41px]">
          <div className="flex flex-col min-h-[85px] relative item- m-6">
            <h1 className="text-4xl font-bold text-neutral-900">Basic</h1>
            <p className=""> For Building personal palettes and projects</p>
          </div>
          <div className="flex  flex-col gap-12 bg-neutral-200  max-h-[465px] min-h-[400px]  rounded-[41px] p-12 w-full h-full">
            <p className="text-neutral-600 break-words">
              <span className="font-semibold text-neutral-800 mr-1 text-2xl">
                $15
              </span>
              per user/monthly billed annualy or
              <span className="font-semibold text-neutral-800">
                $24 billed monthly
              </span>
            </p>
            <button className="w-3/4 text-neutral-800   bg-neutral-50 h-12 border-2  rounded-lg ">
              Get Started
            </button>
            <div className="flex flex-col items-left gap-2 ">
              <p className="font-semibold flex text-lg">What's included</p>

              <div className="flex flex-col  gap-2">
                <p className="flex flex-row items-center">
                  {" "}
                  <Check size={25} className="mr-2" strokeWidth={1.5} />{" "}
                  Unlimited projects
                </p>

                <p className="flex flex-row items-center">
                  {" "}
                  <Check size={25} className="mr-2" strokeWidth={1.5} />
                  50GB Storage
                </p>

                <p className="flex flex-row items-center">
                  {" "}
                  <Check size={25} className="mr-2" strokeWidth={1.5} />
                  Limited Support
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-auto w-[25rem] relative h-[auto] justify-between  bg-neutral-100 rounded-[41px]">
          <div className=" rounded-lg top-5 right-10 absolute max-h-[9rem] items-center justify-center min-h-[2rem] w-[6rem] flex bg-blue-100 transparent-bg">
            <p className="font-bold text-xs text-blue-900">Most Popular</p>
          </div>
          <div className="flex flex-col m-6 min-h-[85px]">
            <h1 className="text-4xl font-bold text-neutral-900">Pro</h1>
            <p className="">
              {" "}
              For Building commercial palettes and Mega projects
            </p>
          </div>
          <div className="flex  flex-col gap-12 bg-neutral-200 max-h-[465px] min-h-[400px] rounded-[41px] p-12 w-full h-full">
            <p className="text-neutral-600 break-words">
              <span className="font-semibold text-neutral-800 mr-1 text-2xl">
                $15
              </span>
              per user/monthly billed annualy or
              <span className="font-semibold text-neutral-800">
                $24 billed monthly
              </span>
            </p>
            <button className="w-3/4 text-white   bg-blue-700 h-12 border-2  rounded-lg text-center flex justify-center items-center">
              Get Started
            </button>
            <div className="flex flex-col items-left gap-2 ">
              <p className="font-semibold flex text-lg">What's included</p>

              <div className="flex flex-col  gap-2">
                <p className="flex flex-row items-center">
                  {" "}
                  <Check size={25} className="mr-2" strokeWidth={1.5} />{" "}
                  Ready-To-Use Templates
                </p>

                <p className="flex flex-row items-center">
                  {" "}
                  <Check size={25} className="mr-2" strokeWidth={1.5} />
                  3TB Storage
                </p>

                <p className="flex flex-row items-center">
                  {" "}
                  <Check size={25} className="mr-2" strokeWidth={1.5} />
                  Unlimited Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
