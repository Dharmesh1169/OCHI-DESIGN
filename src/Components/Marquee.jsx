import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-speed=".1" data-scroll-section className="w-full py-[7vw] rounded-tl-[1.5vw] rounded-tr-[1.5vw] bg-[#004D43]">
      <div className="text border-t-[1px] border-b-[1px] border-[#4D837C] flex items-center justify-center whitespace-nowrap overflow-hidden">
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className="flex-shrink-0 font-['fndrs'] leading-none text-[27vw] mb-[-2vw] mt-[-5vw] pr-20">
          WE ARE OCHI
        </motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className="flex-shrink-0 font-['fndrs'] leading-none text-[27vw] mb-[-2vw] mt-[-5vw] pr-20">
          WE ARE OCHI
        </motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className="flex-shrink-0 font-['fndrs'] leading-none text-[27vw] mb-[-2vw] mt-[-5vw] pr-20">
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
