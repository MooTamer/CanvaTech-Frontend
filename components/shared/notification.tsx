import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Notification() {
  return <>
  <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                <div className="bg-lime-300 border-0 transparent-bg flex justify-center items-center flex-row rounded-[25px] pl-[6px] pr-[7px] py-[6px] mb-[32px] ">
                  <p className="flex flex-row items-center justify-center ">
                    <span className="bg-lime-500 border-0 text-[12px] sm:text-[13px] md:text-[15px] lg:text-[16px] font-bold  flex flex-row rounded-[20px] py-[5px] px-[10px]">
                      What's new
                    </span>
                    <span className="pl-3 pr-1 text-center text-[12px] sm:text-[13px] md:text-[15px] lg:text-[16px] items-center flex ">
                      Introducing renting palettes
                    </span>

                    <ArrowRight
                      className="items-center text-center justify-center flex"
                      strokeWidth={1.8}
                    />
                  </p>
                </div>
              </motion.div>
            </AnimatePresence></>;
}
