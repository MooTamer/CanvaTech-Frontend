"use client";
import Categories from "@/components/homepage/categories";
import NewHome from "@/components/homepage/welcome";
import React, { useState } from "react";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ShopByCategory from "@/components/homepage/shop-by-categories";
import Notification from "@/components/shared/notification";
import Dilevery from "@/components/homepage/dilevery";

export default function Page(props: React.FC) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="h-screen">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <div className="h-full p-2 relative items-center flex flex-col  py-10 my-20">
            <Notification />
            <NewHome />
            <ShopByCategory />
            <Dilevery />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
