"use client";
import { Check } from "lucide-react";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { checkout } from "../stripe/checkout";
interface CategoriesProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Categories({ isOpen, setIsOpen }: CategoriesProps) {
  const element = document.getElementById("modal");

  useEffect(() => {
    if (isOpen && element) {
      element.style.display = "flex";
    } else if (!isOpen && element) {
      element.style.display = "none";
    }
  }, [isOpen, element]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const stopPropagation = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.1 }}
      >
        <div
          id="modal"
          className="fixed inset-0 flex items-center justify-center z-[70]"
          onClick={(e) => {
            closeModal();
            stopPropagation(e);
          }}
        >
          <div className="absolute inset-0  modal-blur" />
          <div className="bg-white p-6 rounded-[40px] shadow-lg h-[95%] justify-center overflow-scroll relative z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <div className="container justify-center flex flex-col mx-auto h-auto  xl:py-8 ">
                <h1 className=" text-center mb-20 responsive-subtitles">
                  Palettes Categories
                </h1>
                <div className=" sm:grid-cols-1 md:grid-cols-3  h-auto justify-center  z-30  grid gap-10 p-7 rounded-[41px]">
                  <div className="pricing-card">
                    <div className="low" />
                    <div className="flex flex-col gap-2 relative min-h-[85px] relative items-left  mt-16 mb-4 mx-5">
                      <div className="flex flex-col">
                        <h1 className="text-3xl font-bold text-neutral-900">
                          Ready-To-Go
                        </h1>
                        <span className="font-semibold text-xl text-gradient">
                          Rental
                        </span>
                      </div>
                      <p className="text-base text-neutral-600">
                        {" "}
                        For those who want to rent a palette
                      </p>
                    </div>
                    <div className="flex  flex-col gap-12 bg-neutral-200  max-h-[465px] min-h-[400px]  rounded-[41px] p-12 w-full h-full">
                      <p className="text-neutral-600 break-words">
                        <span className="font-semibold text-neutral-800 mr-1 text-2xl">
                          From{" "}
                          <span className="text-neutral-800 font-bold text-2xl">
                            $399
                          </span>
                        </span>
                        per palette billed annualy
                        <span className="font-semibold text-neutral-800">
                          {" "}
                          <br /> or $49 billed monthly 
                        </span>
                      </p>
                      <button className="w-3/4 shadow-inner text-neutral-800   bg-neutral-50 h-12 border-2  rounded-lg ">
                        Get Started
                      </button>
                      <div className="flex flex-col items-left gap-2 ">
                        <p className="font-semibold flex text-lg">
                          What's included
                        </p>

                        <div className="flex flex-col  gap-2">
                          <p className="flex flex-row items-center">
                            {" "}
                            <Check
                              size={25}
                              className="mr-2"
                              strokeWidth={1.5}
                            />{" "}
                            Ready-To-Use Templates
                          </p>

                          <p className="flex flex-row items-center">
                            {" "}
                            <Check
                              size={25}
                              className="mr-2"
                              strokeWidth={1.5}
                            />
                            14-days Money Back Guarantee
                          </p>

                          <p className="flex flex-row items-center">
                            {" "}
                            <Check
                              size={25}
                              className="mr-2"
                              strokeWidth={1.5}
                            />
                            Limited Support
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pricing-card">
                    <div className="medium" />
                    <div className=" rounded-lg top-0 left-10 absolute max-h-[9rem] items-center justify-center min-h-[2rem] w-[6rem] flex bg-blue-100 transparent-bg">
                      <p className="font-bold text-xs text-blue-900">
                        Most Popular
                      </p>
                    </div>
                    <div className="flex flex-col relative min-h-[85px] relative item- mt-16 mb-4 mx-5">
                      <div className="flex flex-col gap-1">
                        <h1 className="text-3xl font-bold text-neutral-900">
                          Ready-To-Go
                        </h1>
                        <p className="text-base text-neutral-600">
                          For those who want to get started quickly
                        </p>
                      </div>
                    </div>
                    <div className="flex  flex-col gap-12 bg-neutral-200  max-h-[465px] min-h-[400px]  rounded-[41px] p-12 w-full h-full">
                      <p className="text-neutral-600 break-words">
                        <span className="font-semibold text-neutral-800 mr-1 text-2xl">
                          From{" "}
                          <span className="text-neutral-800 font-bold text-2xl">
                            $999
                          </span>
                        </span>
                        per palette billed annualy
                        <span className="font-semibold text-neutral-800 ">
                          {" "}
                          <br />
                          or $99 billed monthly
                        </span>
                      </p>
                      <button className="w-3/4 shadow-inner text-neutral-900  bg-stone-300 h-12 border-2  rounded-lg ">
                        Get Started
                      </button>
                      <div className="flex flex-col items-left gap-2 ">
                        <p className="font-semibold flex text-lg">
                          What's included
                        </p>

                        <div className="flex flex-col  gap-2">
                          <p className="flex flex-row items-center">
                            {" "}
                            <Check
                              size={25}
                              className="mr-2"
                              strokeWidth={1.5}
                            />{" "}
                            Ready-To-Use Templates
                          </p>

                          <p className="flex flex-row items-center">
                            {" "}
                            <Check
                              size={25}
                              className="mr-2"
                              strokeWidth={1.5}
                            />
                            30-days Money Back Guarantee
                          </p>

                          <p className="flex flex-row items-center">
                            {" "}
                            <Check
                              size={25}
                              className="mr-2"
                              strokeWidth={1.5}
                            />
                            Limited Support
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col relative mx-auto w-[25rem] h-[auto] justify-between bg-neutral-100 rounded-[41px] shadow-10xl transition-transform duration-300 ease-in-out transition-shadow duration-300 ease-in-out hover:-translate-x-3 hover:-translate-y-4">
                    <div className="high" />
                    <div className="flex flex-col relative mt-16 mb-4 mx-5 min-h-[85px]">
                      <h1 className="text-3xl font-bold text-neutral-900">
                        Customizable Palettes
                      </h1>
                      <p className="text-base text-neutral-600">
                        For those who want to build their own palettes
                      </p>
                    </div>
                    <div className="flex  flex-col gap-12 bg-neutral-200 max-h-[465px] min-h-[400px] rounded-[41px] p-12 w-full h-full">
                      <p className="text-neutral-600 break-words">
                        <span className="font-semibold text-neutral-800 mr-1 text-2xl">
                          From{" "}
                          <span className="text-neutral-800 font-bold text-2xl">
                            $1699
                          </span>
                        </span>
                        per palette billed annualy
                        <span className="font-semibold text-neutral-800">
                          <br /> or $199 billed monthly
                        </span>
                      </p>
                      <button className="w-3/4 shadow-inner text-white   bg-blue-700 h-12 border-2  rounded-lg text-center flex justify-center items-center"
                       onClick={(() => {
                        checkout({
                          lineItems: [
                            {
                              price: "price_1PIS6V07iZEV36z18Kyg84ds",
                              quantity: 1
                            }
                          ]
                        })
                      }
                       )}
                       >
                        Get Started 
                      </button>
                      <div className="flex flex-col items-left gap-2 ">
                        <p className="font-semibold flex text-lg">
                          What's included
                        </p>

                        <div className="flex flex-col  gap-2">
                          <p className="flex flex-row items-center">
                            {" "}
                            <Check
                              size={25}
                              className="mr-2"
                              strokeWidth={1.5}
                            />{" "}
                            Customizable Templates
                          </p>

                          <p className="flex flex-row items-center">
                            {" "}
                            <Check
                              size={25}
                              className="mr-2"
                              strokeWidth={1.5}
                            />
                            90-days Money Back Guarantee
                          </p>

                          <p className="flex flex-row items-center">
                            {" "}
                            <Check
                              size={25}
                              className="mr-2"
                              strokeWidth={1.5}
                            />
                            Unlimited 24/7 Support
                          </p>
                          <p className="flex flex-row items-center">
                            {" "}
                            <Check
                              size={25}
                              className="mr-2"
                              strokeWidth={1.5}
                            />
                            Free Delivery
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
