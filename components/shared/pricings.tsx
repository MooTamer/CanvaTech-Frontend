import { Check } from "lucide-react";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface PricingsProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Pricings({ isOpen, setIsOpen }: PricingsProps) {
  const element = document.getElementById("mo");

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
          id="mo"
          className="fixed inset-0 flex items-center justify-center z-[70]"
          onClick={(e) => {
            closeModal();
            stopPropagation(e);
          }}
        >
          <div className="absolute inset-0  modal-blur"></div>
          <div className="bg-white p-6 rounded-[40px] shadow-lg h-[95%] justify-center overflow-scroll relative z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <div className="container justify-center flex flex-col mx-auto h-auto  xl:py-8 ">
                <h1 className=" text-center mb-20 responsive-subtitles">
                  Pricing Plans
                </h1>
                <div className=" md:grid-cols-2  h-auto justify-center  z-30  grid gap-10 p-7 rounded-[41px]">
                  <div className="pricing-card">
                    <div className="flex flex-col min-h-[85px] relative item- m-6">
                      <h1 className="text-4xl font-bold text-neutral-900">
                        Basic
                      </h1>
                      <p className="">
                        {" "}
                        For Building personal palettes and projects
                      </p>
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
                            Unlimited projects
                          </p>

                          <p className="flex flex-row items-center">
                            {" "}
                            <Check
                              size={25}
                              className="mr-2"
                              strokeWidth={1.5}
                            />
                            50GB Storage
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
                    <div className=" rounded-lg top-0 right-10 absolute max-h-[9rem] items-center justify-center min-h-[2rem] w-[6rem] flex bg-blue-100 transparent-bg">
                      <p className="font-bold text-xs text-blue-900">
                        Most Popular
                      </p>
                    </div>
                    <div className="flex flex-col m-6 min-h-[85px]">
                      <h1 className="text-4xl font-bold text-neutral-900">
                        Pro
                      </h1>
                      <p className="">
                        {" "}
                        For Building commercial palettes and Mega projects
                      </p>
                    </div>
                    <div className="flex  flex-col gap-12 bg-neutral-200 max-h-[465px] min-h-[400px] rounded-[41px] p-12 w-full h-full">
                      <p className="text-neutral-600 break-words">
                        <span className="font-semibold text-neutral-800 mr-1 text-2xl">
                          $69
                        </span>
                        per user/monthly billed annualy or
                        <span className="font-semibold text-neutral-800">
                          $99 billed monthly
                        </span>
                      </p>
                      <button className="w-3/4 text-white   bg-blue-700 h-12 border-2  rounded-lg text-center flex justify-center items-center">
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
                            3TB Storage
                          </p>

                          <p className="flex flex-row items-center">
                            {" "}
                            <Check
                              size={25}
                              className="mr-2"
                              strokeWidth={1.5}
                            />
                            Unlimited Support
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
